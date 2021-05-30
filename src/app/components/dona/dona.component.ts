import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  @Input('labels') doughnutChartLabels: Label[] = ['titulo', 'probando', 'Mail-Order Sales'];;
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  @Input() titulo:string = "Sin titulo";
  


  constructor() { }

  ngOnInit(): void {
  }

}
