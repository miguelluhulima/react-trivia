import React from "react"

import Answer from "./Answer"

export default function Card(props) {
    // console.log(props.correct_answer)
    // console.log(props.incorrect_answers)

    props.incorrect_answers.push(props.correct_answer)
    const answers = props.incorrect_answers

    const answerElements = answers.map((answer) => {
        return (
            <Answer value={answer} />
        )
    })
    
    return (
        <div className="card">
            <h2>{props.question}</h2>
            <div className="card--answers">
                {answerElements}
            </div>
        </div>
    )
}