import React, { useState } from 'react';
import './quizdata.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
	const questions = [
		{
			questionText: 'What is 2 + 2?',
			answerOptions: [
				{ answerText: '2', isCorrect: false },
				{ answerText: '10', isCorrect: false },
				{ answerText: '4', isCorrect: true },
				{ answerText: '6', isCorrect: false },
			],
		},
		{
			questionText: 'What structure uses LIFO?',
			answerOptions: [
				{ answerText: 'Array', isCorrect: false },
				{ answerText: 'Stacks', isCorrect: true },
				{ answerText: 'Int', isCorrect: false },
				{ answerText: 'Queues', isCorrect: false },
			],
		},
		{
			questionText: 'What does this equation mean? x != t',
			answerOptions: [
				{ answerText: 'x is assigned to t', isCorrect: false },
				{ answerText: 'x and t are equal ', isCorrect: false },
				{ answerText: 'x not equal to t', isCorrect: true },
				{ answerText: 't is added to a', isCorrect: false },
			],
		},
		{
			questionText: 'One loop inside the body of another loop is called?',
			answerOptions: [
				{ answerText: 'Loop in loop', isCorrect: false },
				{ answerText: 'Double loop', isCorrect: false },
				{ answerText: 'Single loop', isCorrect: false },
				{ answerText: 'Nested', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
