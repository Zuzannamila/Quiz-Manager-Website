import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AnswersService } from 'src/app/services/answers.service';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  form: FormGroup;
  questionId: string | undefined;
  quizId: string | undefined;
  answerAId: string | undefined;
  answerBId: string | undefined;
  answerCId: string | undefined;
  answerDId: string | undefined;

  constructor(
    private _activeRoute: ActivatedRoute, 
    private _questionsService: QuestionsService,
    private _answersService: AnswersService,
    private _router: Router
    ) {
    this.form = new FormGroup({
      question: new FormControl('', [Validators.required]),
			answers: new FormControl('', [Validators.required]),
			answerAText: new FormControl('', [Validators.required]),
			answerBText: new FormControl('', [Validators.required]),
      answerCText: new FormControl('', [Validators.required]),
			answerDText: new FormControl('', [Validators.required]),
		});
   }

  ngOnInit(): void {
    this._activeRoute.paramMap
    .pipe(
      switchMap((params: ParamMap) => {
        return this._questionsService.getQuestionById(params.get('id'));
      })
    ).subscribe(question => {
        this.setPage(question);
        console.log(question)
      },
      error => {
        console.log('Error on fetching data: ', error);
      }
    );
  }

  onSubmit() {
    const questionToEdit: any = {
			content: this.form.value.question.trim(),
		};
    const answersToEdit: any[] = [];
    const answerAToEdit: any = {
			content: this.form.value.answerAText.trim(),
      isCorrect: (this.form.value.answers === 'answerA'),
      id: this.answerAId
		};
    const answerBToEdit: any = {
			content: this.form.value.answerBText.trim(),
      isCorrect: (this.form.value.answers === 'answerB'),
      id: this.answerBId
		};
    const answerCToEdit: any = {
			content: this.form.value.answerCText.trim(),
      isCorrect: (this.form.value.answers === 'answerC'),
      id: this.answerCId
		};
    const answerDToEdit: any = {
			content: this.form.value.answerDText.trim(),
      isCorrect: (this.form.value.answers === 'answerD'),
      id: this.answerDId
		};
    answersToEdit.push(answerAToEdit);
    answersToEdit.push(answerBToEdit);
    answersToEdit.push(answerCToEdit);
    answersToEdit.push(answerDToEdit);
    this._questionsService.editQuestion(questionToEdit, this.questionId).subscribe((res: any) => {
      this._answersService.editAnswers(answersToEdit, this.questionId).subscribe((x: Response ) => {
        this._router.navigate([this.quizId]);
      });
    });
  }

  setPage(question: any) {
    this.questionId = question.id;
    this.quizId = question.quizId;
    this.form.get('question')?.setValue(question.content);
    this._answersService.getAnswers(question.id).subscribe((res: any) => {
      this.answerAId = res[0]?.id;
      this.answerBId = res[1]?.id;
      this.answerCId = res[2]?.id;
      this.answerDId = res[3]?.id;
      let correctAnswerIndex = res?.findIndex((x: { isCorrect: boolean; }) => x.isCorrect == true);  
      this.form.get('answerAText')?.setValue(res[0]?.content);
      this.form.get('answerBText')?.setValue(res[1]?.content);
      this.form.get('answerCText')?.setValue(res[2]?.content);
      this.form.get('answerDText')?.setValue(res[3]?.content);
      switch (correctAnswerIndex ) {
        case 0:
          this.form.get('answers')?.setValue('answerA');
          break;
        case 1:
          this.form.get('answers')?.setValue('answerB');
          break;
        case 2:
          this.form.get('answers')?.setValue('answerC');
          break;
        case 3:
          this.form.get('answers')?.setValue('answerD');
          break;
        default:
          break;
      }
    });
  }

  isDisabled(isEmpty: any) {
    if (isEmpty) {
      return true;
    }
    return undefined;
  }
}
