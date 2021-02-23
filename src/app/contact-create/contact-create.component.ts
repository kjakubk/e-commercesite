import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  contact : {id, name, description, email,onnlineh} = {id: null, name: "", description: "", email: "", onnlineh: ""};

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

 
}
