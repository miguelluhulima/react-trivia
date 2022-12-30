import React from "react"

import he from "he"

export default function Answer(props) {
    return (
        <div>
            <button
                className="answer--button"
                onClick={() => props.isHeld(props.data.id, props.questionID)}>{he.decode(props.value)}
            </button>
        </div>
    )
}