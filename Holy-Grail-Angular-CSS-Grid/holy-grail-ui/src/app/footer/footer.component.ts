import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public copyRightDate:string | undefined;
  constructor() {
    let date = new Date();
    this.copyRightDate = (date.getFullYear()-1)+" - "+date.getFullYear();
  }
 
  ngOnInit(): void {
  }

}
