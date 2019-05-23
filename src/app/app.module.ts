import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewModule } from './view/view.module';
import { CatModule } from './cat/cat.module';
import { DogModule } from './dog/dog.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ViewModule,
    CatModule,
    DogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
