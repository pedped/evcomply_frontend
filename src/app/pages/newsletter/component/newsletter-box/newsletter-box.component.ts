import {Component, OnInit} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-newsletter-box',
  templateUrl: './newsletter-box.component.html',
  styleUrls: ['./newsletter-box.component.css']
})
export class NewsletterBoxComponent implements OnInit {

  emailAddress: string = "";
  @Output() onRequestJoin : EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit(): void {

  }

  onJoinButtonClicked() {
    // get a csrf data from server
    // make a request
    this.onRequestJoin.emit(this.emailAddress);
  }


}
