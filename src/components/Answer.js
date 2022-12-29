import React from "react"

export default function Answer(props) {
    return (
        <div className="answer">
            <p className="answer--text">{props.value}</p>
        </div>
    )
}