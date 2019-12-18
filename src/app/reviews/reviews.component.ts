import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  constructor() { }
  ngAfterViewChecked() {
    // $('.carousel').carousel({
    //   interval: 2000
    // })
  }
  ngOnInit() {
  }

}
