import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Import HomeComponent here if needed

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent // Include HomeComponent here if you want to use it directly in your app
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
