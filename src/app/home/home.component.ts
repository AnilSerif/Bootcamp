import { Component, OnInit } from '@angular/core';
import { Presentation } from './Presentation';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  pres:Presentation[]=[
    {
    names:"Anıl", 
    surname:"Şahin",
    image:"assets/Image/pr.jpg",
    description:"Merhaba ben Anıl, 23 yaşındayım Haliç Üniversitesi Turizm İşletme Mezunuyum. Front-End dünyalarına üniversite son yıllarımda merak salmıştım fakat derslerim dolayısıyla odaklanamamıştım. Pandeminin ortaya çıkışıyla evde olduğum zamanlarda tekrardan bu merakıma yöneldim. ",
  }
  ]
  ngOnInit(): void {
  }

}
