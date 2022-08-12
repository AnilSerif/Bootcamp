
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employees } from './employees';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  title="Our Team";
  member:Employees[]=[
    {id:1,name:"Kemal",surname:"Kuş",title:"CEO",country:"Türkiye",city:"Antalya",birthdate:new Date(1974, 11, 24, 10, 33), image:"assets/Image/employees/man1.jpg"},
    {id:2,name:"Ayşe",surname:"Kaçan",title:"Sales Representative",country:"Türkiye",city:"Antalya",birthdate:new Date(1974, 6, 23, 10, 33),image:"assets/Image/employees/woman1.jpg"},
    {id:3,name:"Ahmet",surname:"Bakır",title:"Vice President",country:"Türkiye",city:"Eskişehir",birthdate:new Date(1973, 8, 24, 10, 33),image:"assets/Image/employees/man2.jpg"},
    {id:4,name:"Veli",surname:"Kur",title:"Sales Manager",country:"Türkiye",city:"Malatya",birthdate:new Date(1976, 11, 24, 10, 33),image:"assets/Image/employees/man3.jpg"},
    {id:5,name:"Nimet",surname:"Zeytin",title:"Inside Sales Coordinator",country:"Türkiye",city:"Antalya",birthdate:new Date(1974, 9, 24, 10, 33),image:"assets/Image/employees/woman2.jpg"},
    {id:6,name:"Ayşe",surname:"Uçan",title:"Software Developer",country:"Türkiye",city:"Antalya",birthdate:new Date(1984, 10, 24, 10, 33),image:"assets/Image/employees/woman3.jpg"},
    {id:7,name:"Aslı",surname:"Gündoğdu",title:"Account",country:"Türkiye",city:"Antalya",birthdate:new Date(1994, 11, 24, 11, 33),image:"assets/Image/employees/woman4.jpg"},
    {id:8,name:"Mehmet",surname:"Kara",title:"Accountant",country:"Türkiye",city:"Antalya",birthdate:new Date(1984, 11, 25, 10, 33),image:"assets/Image/employees/man4.jpg"},
]
  constructor() { }

  ngOnInit(): void {
  }

}
