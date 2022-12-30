import React from "react"

import Question from "./Question"

export default function Quiz(props) {
  const cardElements = props.quizData.map((data) => {
    return (
      <Question
        key={data.id}
        questionID={data.id}
        question={data.question}
        answers={data.answers}
        correctAnswer={data.correctAnswer}
        isHeld={props.isHeld}
      />
    )
  })

  return (
    <div className="quiz">
      {cardElements}
      <button className="quiz--submit">Submit Answers</button>
    </div>
  )
}