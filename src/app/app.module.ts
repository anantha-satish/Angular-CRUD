import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserService } from './services';
import { UserAdapter } from './adapters';
import { BaseUrlProvider } from './interceptors';

@NgModule({
  imports: [CommonModule, BrowserModule, HttpClientModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [UserService, UserAdapter, BaseUrlProvider],
})
export class AppModule {}
