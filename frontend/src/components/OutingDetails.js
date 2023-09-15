const OutingDetails = ({ outing }) => {
    return(
        <div className="outing-details">
            <p><strong>Leave Type: </strong>{outing.leaveType}</p>
            <p><strong>Visiting Place: </strong>{outing.visitingPlace}</p>
            <p><strong>Reason: </strong>{outing.reason}</p>
            <p><strong>From Date: </strong>{outing.fromDate}</p>
            <p><strong>From Time: </strong>{outing.fromTime}</p>
            <p><strong>To Date: </strong>{outing.toDate}</p>
            <p><strong>To Time: </strong>{outing.toTime}</p>
        </div>
    )
}

export default OutingDetails