import { Component, OnInit } from '@angular/core';
declare let alertify:any;

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 Welcome(Welcome:any){
  alertify.success("Hoş Geldiniz")  
 }
}
