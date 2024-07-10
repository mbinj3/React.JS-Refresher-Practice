import React from 'react';

function TernaryOperator(props){
    const isGoal = props.isGoal
    function MadeGoal(){
        return(
            <h1>You Made a Goal</h1>
        )
    }
    function MissedGoal(){
        return(
            <h1>You Missed a Goal</h1>
        )
    }
    return(
        <div>{isGoal ? <MadeGoal /> : <MissedGoal />}</div>
    )
}

export default TernaryOperator