import React, { useState, useEffect } from 'react';
import QuizService from './QuizService'
import Question from './Question'
import Results from './Results'

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
           <h1 className="heading"> QuizBee </h1>
           <div className="quiz-container">
               {
                   noOfAnswerd === questionCount ? <Results total={questionCount} correct={score}/> :
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