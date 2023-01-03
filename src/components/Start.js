import React from "react"

export default function Start(props) {
    return (
        <div className="start">
            <h1 className="start--title">Quizzical</h1>
            <p className="start--text">A trivia game, made in React</p>
            <button className="start--button" onClick={props.handleClick}>Start Quiz</button>
            <footer className="start--footer">By Miguel</footer>
        </div>
    )
}