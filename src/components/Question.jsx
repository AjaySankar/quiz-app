import React, { useState } from 'react';

function Question(props) {
    const { id, questionInfo, handleAnswerSelected} = props
    const { question, answers } = questionInfo
    const [ selectedAnswer, updateSelectedAnswer ] = useState('')
    return (
        <div>
            <h5>
                {question}
            </h5>
            {
                answers.filter(answer => selectedAnswer.length === 0 || answer === selectedAnswer).map((answer, index) => 
                    <input type="button" 
                        value={answer}
                        key={index}
                        onClick={({target: {value}}) => {
                            updateSelectedAnswer(value)
                            handleAnswerSelected(id, value)
                        }}>
                    </input>)
            }
        </div>
    );
}

export default Question;