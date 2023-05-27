import React, { useState } from 'react';
import './Admin.css'
const Admin = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    options: ['', '', '', ''],
    answer: 0,
    image: '',
    video: '',
    equation: ''
  });

  const handleQuestionChange = (e) => {
    setCurrentQuestion({ ...currentQuestion, question: e.target.value });
  };

  const handleOptionChange = (e, index) => {
    const updatedOptions = [...currentQuestion.options];
    updatedOptions[index] = e.target.value;
    setCurrentQuestion({ ...currentQuestion, options: updatedOptions });
  };

  const handleAnswerChange = (e) => {
    setCurrentQuestion({ ...currentQuestion, answer: parseInt(e.target.value) });
  };

  const handleImageUpload = (e) => {
    // Handle image upload logic here
  };

  const handleVideoUpload = (e) => {
    // Handle video upload logic here
  };

  const handleEquationChange = (e) => {
    setCurrentQuestion({ ...currentQuestion, equation: e.target.value });
  };

  const addQuestion = () => {
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion({
      question: '',
      options: ['', '', '', ''],
      answer: 0,
      image: '',
      video: '',
      equation: ''
    });
  };

  const editQuestion = (index) => {
    setCurrentQuestion(questions[index]);
    // Implement edit logic here
  };

  const deleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  return (
    <div className='admin'>
      <h1>Admin</h1>
      <div>
        <label>Question:</label>
        <input type="text" value={currentQuestion.question} onChange={handleQuestionChange} />
      </div>
      <div>
        <label>Options:</label>
        {currentQuestion.options.map((option, index) => (
          <input key={index} type="text" value={option} onChange={(e) => handleOptionChange(e, index)} />
        ))}
      </div>
      <div>
        <label>Answer:</label>
        <select value={currentQuestion.answer} onChange={handleAnswerChange}>
          {currentQuestion.options.map((_, index) => (
            <option key={index} value={index}>{index}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Image:</label>
        <input type="file" onChange={handleImageUpload} />
      </div>
      <div>
        <label>Video:</label>
        <input type="file" onChange={handleVideoUpload} />
      </div>
      <div>
        <label>Equation:</label>
        <input type="text" value={currentQuestion.equation} onChange={handleEquationChange} />
      </div>
      <button onClick={addQuestion}>Add Question</button>
      <hr />
      <h2>Questions</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
          <p>Options: {question.options.join(', ')}</p>
          <p>Answer: {question.answer}</p>
          <button onClick={() => editQuestion(index)}>Edit</button>
          <button onClick={() => deleteQuestion(index)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Admin;
