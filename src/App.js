import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is your Mother,s Language ?',
			answerOptions: [
				{ answerText: 'English', isCorrect: false },
				{ answerText: 'Bangla', isCorrect: false },
				{ answerText: 'Arabic', isCorrect: true },
				{ answerText: 'Hinde', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
	const [currentQuestion,setCurrentQuestion]=useState(0)
	const [showScore,setShowScore]=useState(false)
	const [score,setScore]=useState(0)

	const handleAnswer=(isCorrect)=>{
		if(isCorrect===true){
			setScore(score + 1)
		}
		const nexQuestion=currentQuestion+1
		if(nexQuestion < questions.length){
			setCurrentQuestion(nexQuestion)
		}else{
			setShowScore(true)
		}
		
	}
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
						{questions[currentQuestion].answerOptions.map((answerOptions)=>
						<button onClick={()=>handleAnswer(answerOptions.isCorrect)}>{answerOptions.answerText}</button>)}
					</div>
				</>
			)}
		</div>
	);
}