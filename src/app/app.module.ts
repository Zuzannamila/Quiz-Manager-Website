import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './shared/button/button.component';
import { UsernameInitialsComponent } from './shared/username-initials/username-initials.component';
import { UserMenagerComponent } from './components/user-menager/user-menager.component';
import { AddQuizComponent } from './components/quizzes/add-quiz/add-quiz/add-quiz.component';
import { EditQuizComponent } from './components/quizzes/edit-quiz/edit-quiz.component';
import { AddQuestionComponent } from './components/questions/add-question/add-question.component';
import { QuestionComponent } from './shared/question/question.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    UsernameInitialsComponent,
    QuizzesComponent,
    UserMenagerComponent,
    AddQuizComponent,
    EditQuizComponent,
    AddQuestionComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    MatRadioModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [
    ButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
