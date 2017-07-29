import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SceneComponent } from './components/scene/scene.component';
import { ObjectComponent } from './components/object/object.component';

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    ObjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
