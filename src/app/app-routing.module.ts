import { LoginGuardGuard } from './services/login-guard.guard';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { UserMenagerComponent } from './components/user-menager/user-menager.component';
import { AddQuizComponent } from './components/quizzes/add-quiz/add-quiz/add-quiz.component';
import { EditQuizComponent } from './components/quizzes/edit-quiz/edit-quiz.component';
import { AddQuestionComponent } from './components/questions/add-question/add-question.component';


const routes: Routes = [
  { path: '', component: QuizzesComponent, canActivate:[LoginGuardGuard] },
  { path: 'user-menager', component: UserMenagerComponent, canActivate:[LoginGuardGuard] },
  { path: 'add-quiz', component: AddQuizComponent, canActivate:[LoginGuardGuard] },
  { path: 'edit-quiz/:id', component: EditQuizComponent, canActivate:[LoginGuardGuard]},
  // { path: 'edit-quiz', component: EditQuizComponent, canActivate:[LoginGuardGuard]},
  { path: 'add-question', component: AddQuestionComponent, canActivate:[LoginGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
