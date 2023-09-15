import { useEffect, useState } from "react"

import OutingDetails from '../components/OutingDetails'

const Home = () => {

    const [outings, setOutings] = useState(null)

    useEffect(() => {
        const fetchOutings = async () => {
            const response = await fetch('/api/outings')
            const json = await response.json()

            if (response.ok) {
                setOutings(json)
            }
        }

        fetchOutings()
    }, [])

    return(
        <div className="home">
            <div className="outings">
                {outings && outings.map((outing) => (
                    <OutingDetails key={outing._id} outing={outing} />
                ))}
            </div>
        </div>
    )
}

export default Home