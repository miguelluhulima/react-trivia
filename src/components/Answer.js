import React from "react"

import he from "he"

export default function Answer(props) {
  const styles = {
    backgroundColor: props.data.isHeld ? "#EF4B4B" : "F4F4F4"
  }

  return (
    <div>
      <button
        className="answer--button"
        onClick={() => props.isHeld(props.data.id, props.questionID)}
        style={styles}
      >
        {he.decode(props.value)}
      </button>
    </div>
  )
}