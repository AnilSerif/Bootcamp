import { Component, OnInit } from '@angular/core';
import { Products } from './Products';
declare let alertify:any;



@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() {}
  filterText=""; 
    products:Products[]=[
            { id: 1, name: "Laptop", price: 2500, stock:10,categoryId: 1, description: "Asus ZenBook",image:"assets/Image/products/laptop.jpg"},
            { id: 2, name: "Mouse", price: 2550, stock:15,categoryId: 2, description: "A4 Tech", image:"assets/Image/products/mouse.jpg" },
            { id: 3, name: "Smart Phone", price: 3400, stock:5,categoryId: 3, description: "Samsung A-34",image:"assets/Image/products/phone.jpg" },
            { id: 4, name: "Television", price: 5500,stock:7,categoryId: 4, description: "LG Smart Tv",image:"assets/Image/products/tv.jpg"},
            { id: 5, name: "Washing Machine", price: 5500,stock:17,categoryId: 5, description: "Vestel",image:"assets/Image/products/ws.jpg"},
            { id: 6, name: "Vacuum Cleaner", price: 5500,stock:27,categoryId: 6, description: "Xiaomi",image:"assets/Image/products/vc.jpg"}
            
  ]

  


  ngOnInit(): void {
  }

  
  Delete(product:any){
    alertify.error("Silindi.");
  }
  
  Updated(product:any){
    alertify.success("Ürün Stoğu Güncellendi.")
  }


}
