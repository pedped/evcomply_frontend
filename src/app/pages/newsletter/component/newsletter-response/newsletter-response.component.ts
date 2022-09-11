import { Component, OnInit , Input } from '@angular/core';
import {NewsletterJoinResponse} from "../../interface/newsletter-join-response";

@Component({
  selector: 'app-newsletter-response',
  templateUrl: './newsletter-response.component.html',
  styleUrls: ['./newsletter-response.component.css']
})
export class NewsletterResponseComponent implements OnInit {

  @Input() newsletterJoinResponse : NewsletterJoinResponse | undefined;

  @Input() isLoading : boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

}
