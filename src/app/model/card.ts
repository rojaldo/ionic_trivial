export class TrivialCard {

    correctAnswer: string;
    answers: string[];
    question: string;
    type: string;
    difficulty: string;
    category: string;
    answered: boolean;
    indexAnswer: number;
    correct: boolean;

    constructor(data: any){
        this.category = data.category;
        this.difficulty = data.difficulty;
        this.type = data.type;
        this.question = data.question;
        this.correctAnswer = data.correct_answer;
        this.answers = new Array<string>();
        this.answers = data.incorrect_answers;
        this.answers.push(this.correctAnswer);
        this.answered = false;
        this.correct = false;
        this.indexAnswer = -1;
    }
}