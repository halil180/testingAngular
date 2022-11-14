import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.scss']
})
export class AlertButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hideContent = true;
  severity = 423;
  content = 'you have been warned';

  toggle(){
    this.hideContent = !this.hideContent;
  }

  toggleAsync(){
    timer(500).subscribe(() => {
      this.toggle();
    })
  }

}
