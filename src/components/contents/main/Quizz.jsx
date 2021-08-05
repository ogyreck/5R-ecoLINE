import React, { useState } from "react"
import "./quizz.css"

const Quizz = () => {

    const questions = require("./questions.json")

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)


    // const handleNextQuestion = () => {
    //     console.log('next');
    //     const nextQuestion = currentQuestion + 1; 
        
    //     if (nextQuestion < questions.length - 1) setCurrentQuestion(nextQuestion)
    //     else setShowScore(true)
    // }

    // const handlePrevQuestion = () => {
    //     console.log('Prev');
    //     const nextQuestion = currentQuestion - 1; 
        
    //     if (nextQuestion < questions.length - 1) setCurrentQuestion(nextQuestion)
    //     else setShowScore(true)
    // }

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) setScore((score + 1))

        const nextQuestion = currentQuestion + 1

        if (nextQuestion < questions.length) setCurrentQuestion(nextQuestion)
        else setShowScore(true)
    }

    const refresh = () =>{
        setCurrentQuestion(0)
        setScore(0)
        setShowScore(false)
    }

    return (
        <section className="test">
            <h2 className="test__heading">Проверь себя</h2>
            <p className="test__description">Пройди тест из 8 вопросов и узнай, <br /> почему планету необходимо спасать уже сейчас</p>
            <div className="quizz">
                {
                    showScore
                        ? <div className="section__score">
                            <div className="refresh_text">Правильных ответов {score} из {questions.length}</div>
                            <button className="refresh_btn"
                                onClick={refresh}>Попробовать еще раз</button>
                        </div>
                        : 
                        <div className="quizz__section">

                        <div className="question__hidden">
                            <div className="question__hidden-text">
                                {questions[currentQuestion].questionText.slice(0, -1)}?
                            </div>
                        </div>

                        <div className="question__section">
                            <div className="question__text">
                                {questions[currentQuestion].questionText}
                            </div>
                            <div className="answer__section">
                                {questions[currentQuestion].answerOptions.map(item => (
                                    <button key={item.answerText} className="button__quizz" onClick={() => handleAnswerOptionClick(item.isCorrect)}>
                                        {item.answerText}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="question__hidden">
                            <div className="question__hidden-text">
                                {questions[currentQuestion].questionText.slice(0, -1)}?
                            </div>
                        </div>
                        
                        </div>
                }
            </div>
        </section>
    )
}
export default Quizz;
