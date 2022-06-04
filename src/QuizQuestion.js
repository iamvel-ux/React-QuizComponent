import React,{Component} from "react";

class QuizQuestion extends React.Component{

    render(){
        return(
            <main>
                <section>
                <p>{this.props.instruction_text}</p>
                </section>
                <section className="buttons">
                <ul>
                    <li>{this.props.quiz_question}</li>
                </ul>
                </section>
            </main>
        )
    }
}

export default QuizQuestion