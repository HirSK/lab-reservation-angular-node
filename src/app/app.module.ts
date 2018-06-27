import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule ,
        MatFormFieldModule,
        MatDatepickerModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        MatExpansionModule,
        MatDialogModule
      } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LabInfoComponent } from './components/lab-info/lab-info.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { NewReservationDialogComponent } from './components/new-reservation-dialog/new-reservation-dialog.component';
import { NewReservationFormComponent } from './components/new-reservation-form/new-reservation-form.component';
import { TimePickerComponent } from './components/time-picker/time-picker.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminpanelComponent },
  { path: 'register', component: RegisterComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LabInfoComponent,
    DatePickerComponent,
    NewReservationDialogComponent,
    NewReservationFormComponent,
    TimePickerComponent,
    HomeComponent,
    NavbarComponent,
    AdminpanelComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule ,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule ,
    MatFormFieldModule,
    MatNativeDateModule,
    NgbModule.forRoot(),
    MatExpansionModule,
    MatDialogModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [],
  entryComponents: [NewReservationDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
