import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonViewComponent } from './person-view/person-view.component';
import { PersonAddComponent } from './person-add/person-add.component';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";
import { AppFirstnameFilterPipe } from './shared/pipes/app-firstname-filter.pipe';
import { AppLastnameFilterPipe } from './shared/pipes/app-lastname-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonViewComponent,
    PersonAddComponent,
    AppFirstnameFilterPipe,
    AppLastnameFilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(/*options*/)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
