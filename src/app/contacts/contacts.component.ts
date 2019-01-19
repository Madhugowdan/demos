import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  posts:any=[];
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit() {
    this.dataService.getposts()
    .subscribe(
      data => {
        this.posts = data;
      }
    )
  }

}
