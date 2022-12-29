import React, { useState, useEffect } from "react"
import { nanoid } from "nanoid"

import Card from "./Card"
import datas from "../data"

export default function Quiz() {
    const [quiz, setQuiz] = useState([])

    const questionElements = datas.results.map((data) => {
        return (
            <Card
                id={nanoid()}
                {...data}
            />
        )
    })

    // useEffect(() => {
    //     fetch('https://opentdb.com/api.php?amount=6&category=9&difficulty=medium&type=multiple')
    //         .then(res => res.json())
    //         .then(data => setQuiz(data.data.quiz))
    // }, [])

    return (
        <div className="quiz">
            {questionElements}
            <button className="quiz--submit">Submit Answers</button>
        </div>
    )
}