import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from 'app/services/data.service';
import { IsValuePipe } from './pipes/is-value.pipe';
import { ValueEditorComponent } from './components/value-editor/value-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    IsValuePipe,
    ValueEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
