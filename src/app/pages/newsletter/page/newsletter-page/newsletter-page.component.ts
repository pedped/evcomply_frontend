import {Component, OnInit} from '@angular/core';
import {CSRF} from "../../interface/csrf";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {NewsletterJoinResponse} from "../../interface/newsletter-join-response";

@Component({
  selector: 'app-newsletter-page',
  templateUrl: './newsletter-page.component.html',
  styleUrls: ['./newsletter-page.component.css']
})
export class NewsletterPageComponent implements OnInit {

  emailAddress: string = "";
  newsletterJoinResponse: NewsletterJoinResponse | undefined;
  isLoading: boolean = false;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  onJoin(emailAddress: string) {

    // try to validate the email address
    if (!this.validateEmail(emailAddress)) {
      this.newsletterJoinResponse = {
        errorMessage: "Email address is empty or invalid",
        result: false
      }
      return;
    }

    // email is valid, set the parameters and make a request
    this.emailAddress = emailAddress;

    // set loading to true and make the newsletter response to null
    this.isLoading = true;
    this.newsletterJoinResponse = undefined;

    this.sendCSRFRequest();
  }

  sendCSRFRequest() {
    var that = this;
    this.http
      .get<CSRF>("/api/token", {}).subscribe(resp => {
      // @ts-ignore
      that.sendJoinRequest(resp.key);
    }, error => {
      that.isLoading = false;
      that.newsletterJoinResponse = {
        errorMessage: "Unable to connect to server, please check your server",
        result: false
      }
    });
  }

  sendJoinRequest(csrfKey: string) {

    var that = this;

    // make a header
    var headers = new HttpHeaders({
      'X-CSRF-TOKEN': csrfKey,
    });

    // make a http post parameter
    const params = new HttpParams()
      .set('email', this.emailAddress);

    // make a request
    this.http
      .post<NewsletterJoinResponse>("/api/newsletter/join", params, {
        headers: headers
      }).subscribe(resp => {
      that.newsletterJoinResponse = resp;
      that.isLoading = false;
    }, error => {
      that.isLoading = false;
      that.newsletterJoinResponse = {
        errorMessage: "Unable to connect to server, please check your server",
        result: false
      }
    });
  }

}
