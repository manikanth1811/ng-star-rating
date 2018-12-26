import { Component } from '@angular/core';
import { ratingElement } from '../app/ratingElement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'rg-rating';
  private starRatingElements:Array<ratingElement> = [];

  constructor() { }

  ngOnInit() {
    let ratingElement1 = new ratingElement();
    ratingElement1.readonly = true;
    ratingElement1.checkedcolor = "red";
    ratingElement1.uncheckedcolor = "green";
    ratingElement1.value = 1;

    let ratingElement2 = new ratingElement();
    ratingElement2.readonly = true;
    ratingElement2.checkedcolor = "yellow";
    ratingElement2.uncheckedcolor = "red";
    ratingElement2.value = 2;

    let ratingElement3 = new ratingElement();
    ratingElement3.readonly = true;
    ratingElement3.checkedcolor = "orange";
    ratingElement3.uncheckedcolor = "yellow";
    ratingElement3.value = 3;

    let ratingElement4 = new ratingElement();
    ratingElement4.readonly = true;
    ratingElement4.checkedcolor = "black";
    ratingElement4.uncheckedcolor = "orange";
    ratingElement4.value = 4;

    let ratingElement5 = new ratingElement();
    ratingElement5.readonly = true;
    ratingElement5.checkedcolor = "pink";
    ratingElement5.uncheckedcolor = "black";
    ratingElement5.value = 5;

    this.starRatingElements.push(ratingElement1);
    this.starRatingElements.push(ratingElement2);
    this.starRatingElements.push(ratingElement3);
    this.starRatingElements.push(ratingElement4);
    this.starRatingElements.push(ratingElement5);
  }
}