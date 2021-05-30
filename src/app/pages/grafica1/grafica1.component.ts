import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.scss']
})
export class Grafica1Component implements OnInit {

  labels1:string[]=['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  data1= [
    [350, 450, 100],
    [250, 130, 70],
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
