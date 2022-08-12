import { Component, OnInit } from '@angular/core';
import { Details } from './Details';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  filterText="";
  detail:Details[]=[
    {id:1,name:"Laptop",price:2500,description:"Lorem ipsum lorem ipsum lorem ipsum",image:"assets/Image/products/phone.jpg"},
    {id:2,name:"Mouse",price:2550,description:"Lorem ipsum lorem ipsum lorem ipsum",image:"assets/Image/products/mouse.jpg"},
    {id:3,name:"Smart Phone",price:3400,description:"Lorem ipsum lorem ipsum lorem ipsum",image:"assets/Image/products/phone.jpg"},
    {id:4,name:"Television",price:5500,description:"Lorem ipsum lorem ipsum lorem ipsum",image:"assets/Image/products/tv.jpg"},
    {id:5,name:"Washing Machine",price:5500,description:"Lorem ipsum lorem ipsum lorem ipsum",image:"assets/Image/products/ws.jpg"},
    {id:6,name:"Vacuum Cleaner",price:5500,description:"Lorem ipsum lorem ipsum lorem ipsum",image:"assets/Image/products/vc.jpg"}


]

  constructor() { }

  ngOnInit(): void {
  }

}
