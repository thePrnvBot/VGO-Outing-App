import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID
let examples

export default class RestaurantsDAO {
  static async injectDB(conn) {
    if (examples) {
      return
    }
    try {
      examples = await conn.db(process.env.RESTREVIEWS_NS).collection("restaurants")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in restaurantsDAO: ${e}`,
      )
    }
  }

  static async getExamples({
    filters = null,
    page = 0,
    examplesPerPage = 20,
  } = {}) {
    let query
    if (filters) {
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } }
      } else if ("cuisine" in filters) {
        query = { "cuisine": { $eq: filters["cuisine"] } }
      } else if ("zipcode" in filters) {
        query = { "address.zipcode": { $eq: filters["zipcode"] } }
      }
    }

    let cursor
    
    try {
      cursor = await examples
        .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { examplesList: [], totalNumExamples: 0 }
    }

    const displayCursor = cursor.limit(examplesPerPage).skip(examplesPerPage * page)

    try {
      const examplesList = await displayCursor.toArray()
      const totalNumExamples = await examples.countDocuments(query)

      return { examplesList, totalNumExamples }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { examplesList: [], totalNumExamples: 0 }
    }
  }
  static async getExampleByID(id) {
    try {
      const pipeline = [
        {
            $match: {
                _id: new ObjectId(id),
            },
        },
              {
                  $lookup: {
                      from: "reviews",
                      let: {
                          id: "$_id",
                      },
                      pipeline: [
                          {
                              $match: {
                                  $expr: {
                                      $eq: ["$restaurant_id", "$$id"],
                                  },
                              },
                          },
                          {
                              $sort: {
                                  date: -1,
                              },
                          },
                      ],
                      as: "reviews",
                  },
              },
              {
                  $addFields: {
                      reviews: "$reviews",
                  },
              },
          ]
      return await examples.aggregate(pipeline).next()
    } catch (e) {
      console.error(`Something went wrong in getRestaurantByID: ${e}`)
      throw e
    }
  }

  static async getCuisines() {
    let cuisines = []
    try {
      cuisines = await restaurants.distinct("cuisine")
      return cuisines
    } catch (e) {
      console.error(`Unable to get cuisines, ${e}`)
      return cuisines
    }
  }
}