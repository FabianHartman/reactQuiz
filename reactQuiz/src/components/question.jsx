function Question({ question, onCorrect }) {
    return (
      <div>
        <p>{question.questionText}</p>
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => {
              if (answer.isCorrect) {
                onCorrect();
              } else {
                window.alert("you are stupid")
              }
            }}
          >
            {answer.text}
          </button>
        ))}
      </div>
    );
  }
  
  export default Question;
  