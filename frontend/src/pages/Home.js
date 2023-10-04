import { useEffect } from "react"
import { useOutingsContext } from "../hooks/useOutingsContext"
import { useAuthContext } from "../hooks/useAuthContext"

import OutingDetails from '../components/OutingDetails'
import OutingForm from "../components/OutingForm"

const Home = () => {
    const {outings, dispatch} = useOutingsContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchOutings = async () => {
            const response = await fetch('/api/outings', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_OUTINGS', payload: json})
            }
        }

        if ( user ) {
            fetchOutings()
        }
        
    }, [dispatch, user])

    return(
        <div className="home">
            <div className="outings">
                {outings && outings.map((outing) => (
                    <OutingDetails key={outing._id} outing={outing} />
                ))}
            </div>
            <OutingForm />
        </div>
    )
}

export default Home