import "./quizz.css"
import React, { Component } from 'react'
import { QuizData } from './QuizData';
import { Link } from 'react-router-dom'


class Quizz extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      userAnswer: null,    //current users answer
      currentIndex: 0,  //current questions index
      options: [],       //the four options
      quizEnd: false,
      quizStart: false,
      score: 0,
      disabled: true,
      result: "Вам стоит задуматься над своими действиями и изучить побольше информации.Все получится!"
    }
  }
  
  quizStart = () => {
    // const { startQuiz } = this.state
    this.setState({
      quizStart: true
    })
  }

  //Component that holds the current quiz
  loadQuiz = () => {
    const { currentIndex } = this.state //get the current index
    this.setState(() => {
      return {
        question: QuizData[currentIndex].question,
        options: QuizData[currentIndex].options,
        points3: QuizData[currentIndex].points3,
        points2: QuizData[currentIndex].points2,
        points0: QuizData[currentIndex].points0,
        img: QuizData[currentIndex].img,
      }
    }
    )
  }

  //Handles Click event for the next button
  nextQuestionHander = () => {
    const { userAnswer, points3, points2, points0, score } = this.state
    // if (score >= 12) {
    //   this.setState({
    //     result: "Неплохо! Вы на верном пути, но можно еще немного постараться!"
    //   })
    // } else if (score >= 16) {
    //   this.setState({
    //     result: "Супер! Ваш образ жизни экологичен! Продолжайте в том же духе!"
    //   })
    // }
    // console.log(score);

    if (userAnswer === points3) {
      this.setState({
        score: score + 3
      })
    }
    else if (userAnswer === points2) {
      this.setState({
        score: score + 2
      })
    } else if (userAnswer === points0) {
      this.setState({
        score: score + 0
      })
    }

    this.setState({
      currentIndex: this.state.currentIndex + 1
    })
  }

  //Load the quiz once the component mounts
  componentDidMount() {
    this.loadQuiz();
  }

  //Update the component
  componentDidUpdate(prevProps, prevState) {
    const { currentIndex } = this.state;
    if (this.state.currentIndex !== prevState.currentIndex) {
      this.setState(() => {
        return {
          disabled: true,
          question: QuizData[currentIndex].question,
          options: QuizData[currentIndex].options,
          points3: QuizData[currentIndex].points3,
          points2: QuizData[currentIndex].points2,
          points0: QuizData[currentIndex].points0, 
          img: QuizData[currentIndex].img,
        }
      });
    }
  }

  //Check the answer
  checkAnswer = answer => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    })
  }

  finishHandler = () => {
    const { userAnswer, points3, points2, points0, score } = this.state

    

    if (userAnswer === points3) {
      this.setState({
        score: score + 3
      })
    }
    else if (userAnswer === points2) {
      this.setState({
        score: score + 2
      })
    } else if (userAnswer === points0) {
      this.setState({
        score: score + 0
      })
    }

    if (score >= 12) {
      this.setState({
        result: `Неплохо! Вы на верном пути, но можно еще немного постараться!`
      })
    }
    if (score >= 16) {
      this.setState({
        result: "Супер! Ваш образ жизни экологичен! Продолжайте в том же духе!"
      })
    }
    console.log(this.state.score);

    if (this.state.currentIndex === QuizData.length - 1) {
      this.setState({
        quizEnd: true
      })
    }


  }


  render() {
    const { question, options, currentIndex, userAnswer, quizEnd, quizStart, img } = this.state //get the current state
    if (quizEnd) {
      return (
        <div className="quiz">
          <div className="quiz_result-page">
            

            <div className="quiz_result">
              <div className="container">
                <span className="quiz_result-text">Ваш результат:</span>
                <span className="quiz_score">{this.state.score} из 18 баллов!</span>
                <p className="quiz_score-text">{this.state.result}</p>
                <img src="img/quiz/arrow_long.svg" alt="" />
              </div>
            </div>
            <div className="quiz_sale">
              <div className="container">
                <p className="quiz_sale-text">Мы дарим вам скидку 10% на всю продукцию магазина по промокоду “ECOLIFE” </p>
                <Link to="/shop" className="quiz_sale-btn">В каталог</Link>
                <p className="quiz_sale-date">Акция действует до 20.09.21</p>
              </div>
            </div>
          </div>
        </div>
      )
    }


    return (
      <div className="quiz">
          {
            quizStart 
            ?
            <div className={img}>
              <div className="quiz_test">
                <span className="quiz_count">{`${currentIndex + 1} / ${QuizData.length}`}</span>
                <h2 className="quiz_question">{question}</h2>
                {options.map(option => (  
                  <p key={option}
                    className={`quiz_options ${userAnswer === option ? "quiz_selected" : null}`}
                    onClick={() => this.checkAnswer(option)}>
                    {option}
                  </p>
                ))}
                {currentIndex < QuizData.length - 1 &&
                  <button
                    className="quiz_button"
                    disabled={this.state.disabled}
                    onClick={this.nextQuestionHander}
                  >Далее<img src="img/quiz/arrow.svg" alt="стрелка" /></button>
                }
                {currentIndex === QuizData.length - 1 &&
                  <button
                    className="quiz_button"
                    disabled={this.state.disabled}
                    onClick={this.finishHandler}
                  >Далее<img src="img/quiz/arrow.svg" alt="" /></button>
                }
              </div>
            </div>
            :
            <div className="quiz_wrapper-bg">
              <div className="quiz_start">
                <h2 className="main-heading quiz__title">Пройди опрос и получи промокод на скидку!</h2>
                <p className="quiz__text">Ответь на 6 вопросов и узнай,<br />насколько экологично ты живешь!</p>
                <button onClick={this.quizStart} className="quiz__btn">Начать</button>
              </div>
            </div>
          }
      </div>
      
    )
  }
}

export default Quizz;
