import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewsletterPageComponent} from './pages/newsletter/page/newsletter-page/newsletter-page.component';
import {
  NewsletterResponseComponent
} from './pages/newsletter/component/newsletter-response/newsletter-response.component';
import {NewsletterBoxComponent} from './pages/newsletter/component/newsletter-box/newsletter-box.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule , HttpClientXsrfModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewsletterPageComponent,
    NewsletterResponseComponent,
    NewsletterBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
