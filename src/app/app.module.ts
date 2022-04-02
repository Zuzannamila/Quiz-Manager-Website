import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './shared/button/button.component';
import { UsernameInitialsComponent } from './shared/username-initials/username-initials.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    UsernameInitialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
  ],
  exports: [
    ButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
