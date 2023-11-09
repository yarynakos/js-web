import React from "react";

function ViewButton({ onClick, viewMore }) {
    return (
        <div className='viewBtn'>
            <button onClick={onClick}>
                {viewMore ? "View less" : "View more"}
            </button>
        </div>
    );
}

export default ViewButton;
