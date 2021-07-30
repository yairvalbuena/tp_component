import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/callapi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  results:any

  constructor(private oPService: ApiService){
  }

  ngOnInit(): void {
    this.oPService.getData().subscribe(
      res => {
        this.results = res
        console.log(res)
    },
      err => console.log(err));
  }




}
