import "./quizz.css"
import React, { Component } from 'react'
import { QuizData } from './QuizData';


class Quizz extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userAnswer: null,    //current users answer
      currentIndex: 0,  //current questions index
      options: [],       //the four options
      quizEnd: false,
      score: 0,
      disabled: true
    }
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
      }
    }
    )
  }

  //Handles Click event for the next button
  nextQuestionHander = () => {
    const { userAnswer, points3, points2, points0, score } = this.state
    
    // console.log(score);
    //Check for correct answer and increment score
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

    if (this.state.currentIndex === QuizData.length - 1) {
      this.setState({
        quizEnd: true
      })
    }
  }

  
  render() {
    const { question, options, currentIndex, userAnswer, quizEnd } = this.state //get the current state       
    if (quizEnd) {
      return (
        <div className="container">
          <h1>Ваш результат: {this.state.score} из 18 баллов</h1>
          <p>Неплохо! Вы на верном пути, но можно еще немного постараться! </p>
          {/* <ul>
            {QuizData.map((item, index) => (
              <li className='options'
                key={index}>
                {item.answer}
              </li>
            ))}
          </ul> */}
        </div>
      )
    }

    return (
        <div className="container">

        <h2>{question}</h2>
        <span>{`Question ${currentIndex + 1} of ${QuizData.length}`}</span>
        {options.map(option => (  //for each option, new paragraph
          <p key={option}
            className={`options ${userAnswer === option ? "selected" : null}`}
            onClick={() => this.checkAnswer(option)}>
            {option}
          </p>
        ))}
        {currentIndex < QuizData.length - 1 &&
          // Next button only displays if the above is true
          <button
            className="quiz_button"
            disabled={this.state.disabled}
            onClick={this.nextQuestionHander}
          >Дальше</button>
        }
        {currentIndex === QuizData.length - 1 &&
          <button
            className="quiz_button"
            disabled={this.state.disabled}
            onClick={this.finishHandler}
          >Конец</button>
        }
      </div>
      
    )
  }
}

export default Quizz;
