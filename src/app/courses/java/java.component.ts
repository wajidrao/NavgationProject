import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  paragraphIntro:boolean=false;
  clikedOnCard()
  {
    this.paragraphIntro=true;
  }

}
