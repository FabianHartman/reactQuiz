class Question {
    constructor(questionText, answers) {
      this.questionText = questionText;
      this.answers = answers;
    }
  
    checkAnswer(selectedAnswer) {
      return this.answers.some(answer => answer.text === selectedAnswer && answer.isCorrect);
    }
  }

class Answer {
    constructor(text, isCorrect){
        this.text = text;
        this.isCorrect = isCorrect;
    }
} 
  