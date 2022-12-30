import React from "react"
import he from "he"

import Answer from "./Answer"


export default function Question(props) {
    const answerElements = props.answers.map(data => {
        return (
            <Answer
                questionID={props.questionID}
                value={data.value}
                data={data}
                isHeld={props.isHeld}
            />
        )
    })
    return (
        <div className="card">
            <h2>{he.decode(props.question)} {props.id}</h2>
            <div className="card--answers">
                {answerElements}
            </div>
        </div>
    )
}