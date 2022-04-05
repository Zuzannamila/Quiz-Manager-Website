import { QuizDetailsComponent } from './components/quizzes/quiz-details/quiz-details.component';
import { LoginGuardGuard } from './services/login-guard.guard';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { UserMenagerComponent } from './components/user-menager/user-menager.component';
import { AddQuizComponent } from './components/quizzes/add-quiz/add-quiz/add-quiz.component';
import { EditQuizComponent } from './components/quizzes/edit-quiz/edit-quiz.component';
import { AddQuestionComponent } from './components/questions/add-question/add-question.component';
import { LoginComponent } from './auth/components/login/login.component';


const routes: Routes = [
  { path: '', component: QuizzesComponent, canActivate:[LoginGuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'user-menager', component: UserMenagerComponent, canActivate:[LoginGuardGuard] },
  { path: 'add-quiz', component: AddQuizComponent, canActivate:[LoginGuardGuard] },
  { path: 'edit-quiz/:id', component: EditQuizComponent, canActivate:[LoginGuardGuard]},
  { path: ':id/add-question', component: AddQuestionComponent, canActivate:[LoginGuardGuard] },
  { path: ':id', component: QuizDetailsComponent, canActivate:[LoginGuardGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
