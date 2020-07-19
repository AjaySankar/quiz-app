import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Question(props) {
    const { id, questionInfo} = props
    const { question, answers } = questionInfo
    return (
        <div>
            <h5>
                {question}
            </h5>
            {
                answers.map(answer => 
                    <input type="button" 
                        value={answer}
                        key={uuidv4()}
                        onClick={(e) => {window.console.log(e.target.value)}}>    
                    </input>)
            }
        </div>
    );
}

export default Question;