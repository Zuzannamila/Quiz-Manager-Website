import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    UsernameInitialsComponent,
    QuizzesComponent,
    UserMenagerComponent,
    AddQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  exports: [
    ButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
