import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  PCList;
  ProcessorList;
  GCardsList;
  MonList;
  MouList;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.PCList = this.dataService.getPC();
    this.ProcessorList = this.dataService.getProcessors();
    this.GCardsList = this.dataService.getGraphicsCards();
    this.MonList = this.dataService.getMonitors();
    this.MouList = this.dataService.getMouses();

  }

}
