import React,{ Component } from "react";

let quizData = require('./quiz_data.json')
class Quiz extends React.Component{
    constructor(){
        super(props);
        this.state = {quiz_position:1}
    }
    render(){
        return <div className="QuizQuestion">Quiz</div>
    }
}

export default Quiz

