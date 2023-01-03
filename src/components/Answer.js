import React from "react"

import he from "he"

export default function Answer(props) {
  console.log(props.data)
  const styles = {
    backgroundColor: props.data.isHeld ? "#EF4B4B" : "F4F4F4",
    // color: props.data.isHeld ? "black" : "white"
  }
  function buttonStyle(item) {
    let myStyle = {}

    if (item.isCheckedCorrect) {
      myStyle = {
        backgroundColor: "#94F7A2",
        color: "#000000"
      }
      return myStyle
    } else if (item.isCheckedFalse) {
      myStyle = {
        backgroundColor: "#EF4B4B"
      }
      return myStyle
    } else {
      myStyle = {
        backgroundColor: props.data.isHeld ? "#EF4B4B" : "F4F4F4"
      }
      return myStyle
    }
  }

  return (
    <div>
      <button
        className="answer--button"
        onClick={() => props.isHeld(props.data.id, props.questionID)}
        style={buttonStyle(props.data)}
      >
        {he.decode(props.value)}
      </button>
    </div>
  )
}