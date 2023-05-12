import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {

  isActive= false;

  constructor() { }

  ngOnInit(): void {
  }

  active(isactive:boolean){
    console.log(isactive)
    this.isActive = !isactive
  }

}
