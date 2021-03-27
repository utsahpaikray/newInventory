import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,OnChanges {
@Input() userInfo: any
  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges(){

    this.userInfo=this.userInfo[0]
    console.log(this.userInfo)
  }

}
