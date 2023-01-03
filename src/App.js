import React, { useState, useEffect } from "react"
import { nanoid } from "nanoid"

import Quiz from "./components/Quiz"
import Start from "./components/Start"

export default function App() {
  const [start, setStart] = useState(false)
  const [quizData, setQuizData] = useState([])
  const [score, setScore] = useState(0)
  const [hasSubmit, setHasSubmit] = useState(false)

  useEffect(() => {
    function formatQuizData(quizData) {
      let formattedData = quizData.map(data => {
        return {
          id: nanoid(),
          question: data.question,
          correctAnswer: data.correct_answer,
          answers: shuffleAnswers([...data.incorrect_answers, data.correct_answer]),
          score: 0
        }
      })

      return formattedData
    }

    fetch(
      "https://opentdb.com/api.php?amount=6&category=9&difficulty=medium&type=multiple"
    )
      .then(res => res.json())
      .then(data => {
        setQuizData(formatQuizData(data.results))
      })
  }, [start])

  function submitQuiz() {
    setScore(0)
    setQuizData(prevQuizState =>
      prevQuizState.map(item => {
        let checkedAnswers = item.answers.map(answer => {
          if (answer.isHeld && item.correctAnswer === answer.value) {
            setScore(prevScore => prevScore + 1)
            return {
              ...answer,
              isCheckedCorrect: true
            }
          } else if (answer.isHeld && item.correctAnswer !== answer.value) {
            return {
              ...answer,
              isCheckedFalse: false
            }
          } else if (!answer.isHeld && item.correctAnswer === answer.value) {
            return {
              ...answer,
              isCheckedCorrect: true
            }
          } else {
            return {
              ...answer,
              isFaded: true
            }
          }
        })
        return {
          ...item,
          answers: checkedAnswers
        }
      })
    )
    setHasSubmit(true)
  }

  function isHeld(answerID, questionID) {
    setQuizData(prevQuizState =>
      prevQuizState.map(item => {
        if (item.id === questionID) {
          let newAnswersArray = item.answers.map((answer) => {
            if (answer.id === answerID) {
              return {
                ...answer,
                isHeld: true
              }
            } else {
              return {
                ...answer,
                isHeld: false
              }
            }
          })
          return {
            ...item,
            answers: newAnswersArray
          }
        } else {
          return item
        }
      })
    )
  }

  function shuffleAnswers(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    let randomAnswersList = array.map(item => {
      return {
        value: item,
        id: nanoid(5),
        isHeld: false,
      }
    })
    return randomAnswersList
  }

  function handleRestart() {
    setStart(false)
    setHasSubmit(false)
  }

  function startGame() {
    setStart(true)
  }

  return (
    <main>
      {start === false ? (
        <Start handleClick={startGame} />
      ) : (
        <Quiz
          key={nanoid()}
          quizData={quizData}
          isHeld={isHeld}
          submitQuiz={submitQuiz}
          hasSubmit={hasSubmit}
          score={score}
          handleRestart={handleRestart}
        />
      )}
    </main>
  )
}