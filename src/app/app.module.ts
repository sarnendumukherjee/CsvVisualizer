import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisualizeComponent } from './pages/visualize/visualize.component';
import { UploadComponent } from './pages/upload/upload.component';

@NgModule({
  declarations: [AppComponent, VisualizeComponent, UploadComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
