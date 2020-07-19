import React, { useState, useEffect } from 'react';
import QuizService from './QuizService'
import Question from './Question'

function QuizApp(props) {
    const [quizBank, updateQuizBank] = useState([])
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
                       return <Question key={questionId} questionInfo={questionInfo}/>
                   })
               }
           </div>
        </div>
    );
}

export default QuizApp;