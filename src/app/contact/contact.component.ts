import { Component, OnInit } from '@angular/core';
import { Members } from './members';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  member:Members[]=[
    {id:1,image:"assets/Image/employees/man1.jpg",name:"Kemal",surname:"Kuş",phone:1211514,mail:"example@gmail.com"},
    {id:2,image:"assets/Image/employees/woman1.jpg",name:"Ayşe", surname:"Kaçan",phone:1211514,mail:"example@gmail.com"},
    {id:3,image:"assets/Image/employees/man2.jpg",name:"Ahmet", surname:"Bakır",phone:1211514,mail:"example@gmail.com"},
    {id:4,image:"assets/Image/employees/man3.jpg",name:"Veli",surname:"Kur",phone:1211514,mail:"example@gmail.com"},
    {id:5,image:"assets/Image/employees/woman2.jpg",name:"Nimet",surname:"Zeytin",phone:1211514,mail:"example@gmail.com"},
    {id:6,image:"assets/Image/employees/woman3.jpg",name:"Ayşe",surname:"Uçan",phone:1211514,mail:"example@gmail.com"},
    {id:7,image:"assets/Image/employees/woman4.jpg",name:"Aslı",surname:"Gündoğdu",phone:1211514,mail:"example@gmail.com"},
    {id:8,image:"assets/Image/employees/man4.jpg",name:"Mehmet",surname:"Kara",phone:1211514,mail:"example@gmail.com"},
  ]
  
  
 
  constructor() { }

  ngOnInit(): void {
  }

}
