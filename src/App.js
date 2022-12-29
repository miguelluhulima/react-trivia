import React, { useState, useEffect } from "react"

import Quiz from "./components/Quiz"
import Start from "./components/Start"

export default function App() {
    const [start, setStart] = useState(false)

    function toggle() {
        setStart(prevState => !prevState)
    }

    return (
        <main>
            {start === false ? <Start handleClick={toggle} /> : <Quiz />}
        </main>
    )
}