import React, { useState, useEffect } from 'react';
import QuizService from './QuizService'
import Question from './Question'

function QuizApp(props) {
    const [quizBank, updateQuizBank] = useState([])
    const [ score, updateScore ] = useState(0)
    const [ noOfAnswerd, updateAnsweredCount ] = useState(0)
    const { questionCount } = props
    function handleUserAnswerSelected(id, selectedAnswer) {
        if(noOfAnswerd === questionCount) {
            return
        }
        updateAnsweredCount(noOfAnswerd+1)
        const [{ correct }] = quizBank.filter(({questionId}) => questionId === id)
        if(correct === selectedAnswer) {
            updateScore(score+1)
        }
    }
    useEffect(() => {
        QuizService().then((qb) => {
            updateQuizBank([...qb])
        })
    }, []);
    return (
        <div>
           <h1> Quiz Bee </h1>
           <div className="quiz-container">
               {
                   quizBank.map(({questionId, ...questionInfo}) => {
                       return <Question 
                        key={questionId}
                        id={questionId}
                        questionInfo={questionInfo}
                        handleAnswerSelected={handleUserAnswerSelected}/>
                   })
               }
           </div>
        </div>
    );
}

export default QuizApp;