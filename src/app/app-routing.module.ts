import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClosedComponent } from './closed/closed.component';
import { FollowUpComponent } from './follow-up/follow-up.component';
import { ImagensComponent } from './imagens/imagens.component';
import { LoginComponent } from './login/login.component';
import { OccurrencesComponent } from './occurrences/occurrences.component';
import { OpenCallComponent } from './open-call/open-call.component';
import { OptionsComponent } from './options/options.component';
import { RegisterComponent } from './register/register.component';
import { StudentComponent } from './student/student.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "home", component: ImagensComponent},
  {path: "register", component: RegisterComponent},
  {path: "options", component: OptionsComponent},
  {path: "openCall", component: OpenCallComponent},
  {path: "followUp", component: FollowUpComponent},
  {path: "occurrences", component: OccurrencesComponent},
  {path: "closed", component: ClosedComponent},
  {path: "student", component: StudentComponent},
  {path: "thanks", component: ThanksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
