import { Component, OnInit } from '@angular/core';
import { ThongkeService } from 'src/app/service/thongke.service';
import { PercentPipe } from '@angular/common';
import { SinhvienService } from 'src/app/service/sinhvien.service';
import { Khoa } from 'src/app/model/khoa.model';
import { DinhkyService } from 'src/app/service/dinhky.service';
import { Hocki } from 'src/app/model/hocki.model';
import { HockiService } from 'src/app/service/hocki.service';
@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.css']
})
export class ThongkeComponent implements OnInit {

  constructor(private dinhkyService:DinhkyService,private hockiService:HockiService,private thongkeService:ThongkeService) { }
pieChartColor:Array<any> = [
  {
      backgroundColor: ['rgba(30, 169, 224, 0.8)',
      'rgba(255,165,0,0.9)',
      'rgba(139, 136, 136, 0.9)',
      'rgba(255, 161, 181, 0.9)'
      ]
  }
]
tong1:number=0;
b:PercentPipe
loaded = false;
loaded1=false;
doughnutChartLabels:string[] = [];
doughnutChartData:Number[] = [];
barChartType:string = 'bar';
barChartLegend:boolean = true;
barChartLabels:string[]=['Béo Phì','Bình Thường','Gầy'];
barChartData:any[] = [
  {data: [], label: 'Nữ'},
  {data: [], label: 'Nam'}
];
doughnutChartType:string = 'pie';
hockis:Hocki[];
idhocki1:number;
lineChartLegend:boolean = true;
lineChartOptions:any = {
  responsive: true,
  tooltips: {
    enabled: true,
    mode: 'single',
    callbacks: {
      label: function(tooltipItem, data) {
        var allData = data.datasets[tooltipItem.datasetIndex].data;
        var tooltipLabel = data.labels[tooltipItem.index];
        var tooltipData = allData[tooltipItem.index];
        return tooltipLabel + ": " + tooltipData + "%";
      }
    }
  }
};
barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true,
  tooltips: {
    enabled: true,
    mode: 'single',
    callbacks: {
      label: function(tooltipItem, data) {
        var allData = data.datasets[tooltipItem.datasetIndex].data;
        var tooltipLabel = data.labels[tooltipItem.index];
        var tooltipData = allData[tooltipItem.index];
        return tooltipLabel + ": " + tooltipData + "%";
      }
    }
  }
};
  ngOnInit() {
    this.hockiService.getAllHocki().subscribe(data=>{
      this.hockis=data;
    });
  }
  onChangeHocki(idhocki){
    this.barChartData = [
      {data: [], label: 'Nữ'},
      {data: [], label: 'Nam'}
    ];
    this.doughnutChartData=[];
    this.tong1=0;
    this.doughnutChartLabels=[];
    this.thongkeService.thongkeBenh(this.idhocki1).subscribe(data=>{
      data.benh.forEach(benh=>{
        this.doughnutChartLabels.push(benh.tenbenh);
        this.doughnutChartData.push(parseFloat(String((benh.soluong/data.tong*100).toFixed(2))));
        this.tong1+=parseFloat(String((benh.soluong/data.tong*100).toFixed(2)));
      });
      if(this.doughnutChartData.length==0){this.loaded=false;}
      else{
        this.doughnutChartLabels.push("Khác")
        this.doughnutChartData.push(100-this.tong1);
        this.loaded=true;};
    });
    this.dinhkyService.chisoBMI(this.idhocki1).subscribe(data=>{
      if(data.tong==0){
        this.loaded1=false;
      }
      else{
        let data1 = [
          parseFloat(String((data.nam.beophi/data.tong*100).toFixed(2))),
          parseFloat(String((data.nam.binhthuong/data.tong*100).toFixed(2))),
          parseFloat(String((data.nam.gay/data.tong*100).toFixed(2)))
        ];
        let data2 =[
          parseFloat(String((data.nu.beophi/data.tong*100).toFixed(2))),
          parseFloat(String((data.nu.binhthuong/data.tong*100).toFixed(2))),
          parseFloat(String((data.nu.gay/data.tong*100).toFixed(2)))
        ]
        let clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data1;
        clone[1].data=data2;
        this.barChartData = clone;
        this.loaded1=true;
      }
    });
  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
