import React, { useEffect, useState } from "react";

import './AccordionItem.scss'

export default function AccordionItem(props) {
  const [showAnswer, setShowAnswer] = useState(false)

  return(
    <div className="accordion-item">
        <button aria-expanded={showAnswer ? "true" : "false"} onClick={() => setShowAnswer(!showAnswer)}>
            <span className="accordion-title">{props.question}</span>
            <span className="icon" aria-hidden="true"></span>
        </button>
        <div className="accordion-content">
            <p>{props.answer}</p>
        </div>
    </div>
  )
}