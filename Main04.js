import React, { useState } from 'react';
import SingleQuestion from './Question';
import data from './data';
import "./style.css"

function Main04() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
     <div className='container1'>
      <h3>Question and answers about login</h3>
      <section className='info'>
        {questions.map((question) =>{
          return(
            <SingleQuestion key={question.id} {...question}></SingleQuestion>
          );
        })}
      </section>
     </div>
    </main>
  )
}
export default Main04;