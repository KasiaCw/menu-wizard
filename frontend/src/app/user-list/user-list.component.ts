import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../auth/user-service.service";
import {UserDetails} from "../auth/user-details";



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: UserDetails[]

  constructor(private userservice: UserServiceService) {
  }

  ngOnInit() {
    this.userservice.findAll().subscribe(data => {
      this.users = data;
    })
  }
  }

