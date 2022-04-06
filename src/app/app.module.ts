import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagensComponent } from './imagens/imagens.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OptionsComponent } from './options/options.component';
import { OpenCallComponent } from './open-call/open-call.component';
import { FollowUpComponent } from './follow-up/follow-up.component';
import { OccurrencesComponent } from './occurrences/occurrences.component';
import { ClosedComponent } from './closed/closed.component';
import { StudentComponent } from './student/student.component';
import { ThanksComponent } from './thanks/thanks.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ImagensComponent,
    LoginComponent,
    RegisterComponent,
    OptionsComponent,
    OpenCallComponent,
    FollowUpComponent,
    OccurrencesComponent,
    ClosedComponent,
    StudentComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
