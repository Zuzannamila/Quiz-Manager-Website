import { LoginGuardGuard } from './services/login-guard.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { UserMenagerComponent } from './components/user-menager/user-menager.component';
import { AddQuizComponent } from './components/quizzes/add-quiz/add-quiz/add-quiz.component';


const routes: Routes = [
  { path: '', component: QuizzesComponent, canActivate:[LoginGuardGuard] },
  { path: 'user-menager', component: UserMenagerComponent, canActivate:[LoginGuardGuard] },
  { path: 'add-quiz', component: AddQuizComponent, canActivate:[LoginGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
