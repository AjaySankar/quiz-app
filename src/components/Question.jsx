import React from 'react';

function Question(props) {
    const {questionInfo} = props
    return (
        <div>
            {JSON.stringify(questionInfo.question)}
        </div>
    );
}

export default Question;