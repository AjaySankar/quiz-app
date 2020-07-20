import React, { useState } from 'react';

function Question(props) {
    const { id, questionInfo, handleAnswerSelected} = props
    const { question, answers } = questionInfo
    const [ selectedAnswer, updateSelectedAnswer ] = useState('')
    return (
        <div className="question-container">
            <h5>
                {question}
            </h5>
            <div className="options-container">
                {
                    answers
                    .filter(answer => selectedAnswer.length === 0 || answer === selectedAnswer)
                    .map((answer, index) => 
                        <button
                            className="option"
                            value={answer}
                            key={index}
                            onClick={({target: {value}}) => {
                                updateSelectedAnswer(value)
                                handleAnswerSelected(id, value)
                            }}>
                        {answer}
                        </button>
                    )
                }
            </div>
        </div>
    );
}

export default Question;