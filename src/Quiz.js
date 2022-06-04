import React,{ Component } from "react";
import QuizQuestion from "./QuizQuestion";

let quizData = require('./quiz_data.json');
let quiz_position;
class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state = {quiz_position:1}
    }
    render(){
        return <QuizQuestion quiz_question={quizData.quiz_questions[quiz_position-1]}/>
    }
}

export default Quiz

