import { useState } from "react"
import { useOutingsContext } from "../hooks/useOutingsContext"

const OutingForm = () => {
    const { dispatch } = useOutingsContext()

    const [leaveType, setLeaveType] = useState("")
    const [visitingPlace, setVisitingPlace] = useState("")
    const [reason, setReason] = useState("")
    const [fromDate, setFromDate] = useState("")
    const [fromTime, setFromTime] = useState("")
    const [toDate, setToDate] = useState("")
    const [toTime, setToTime] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const outing = {leaveType, visitingPlace, reason, fromDate, fromTime, toDate, toTime}

        const response = await fetch('/api/outings', {
            method: 'POST',
            body: JSON.stringify(outing),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!json.ok) {
            setError(json.error) 
        }

        if (json.ok) {
            setLeaveType("")
            setVisitingPlace("")
            setReason("")
            setFromDate("")
            setFromTime("")
            setToDate("")
            setToTime("")
            setError(null)
            console.log("Outing request created", json)
            dispatch({type: 'CREATE_OUTING', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Create an Outing Request</h3>

            <label>Leave Type:</label>
            <input 
                type="text"
                onChange={(e) => setLeaveType(e.target.value)}
                value={leaveType}
            />

            <label>Visiting Place:</label>
            <input 
                type="text"
                onChange={(e) => setVisitingPlace(e.target.value)}
                value={visitingPlace}
            />

            <label>Reason:</label>
            <input 
                type="text"
                onChange={(e) => setReason(e.target.value)}
                value={reason}
            />

            <label>From Date:</label>
            <input 
                type="text"
                onChange={(e) => setFromDate(e.target.value)}
                value={fromDate}
            />

            <label>From Time:</label>
            <input 
                type="text"
                onChange={(e) => setFromTime(e.target.value)}
                value={fromTime}
            />

            <label>To Date:</label>
            <input 
                type="text"
                onChange={(e) => setToDate(e.target.value)}
                value={toDate}
            />

            <label>To Time:</label>
            <input 
                type="text"
                onChange={(e) => setToTime(e.target.value)}
                value={toTime}
            />
        
            <button>Submit Request</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default OutingForm