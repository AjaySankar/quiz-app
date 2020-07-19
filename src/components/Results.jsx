import React from 'react';

const Results = (props) => {
    const { correct, total } = props
    return (
        <div>
            <h1> Your score {correct} / {total} </h1>
        </div>
    );
};

export default Results;