import { Component, OnInit, Input } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import { User } from '../model/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router) {}
  UserLogin:User;
  ngOnInit() {
     this.UserLogin=JSON.parse(localStorage.getItem("currentUser"));
  }
  logout()
  {
    localStorage.removeItem('currentUser');
    location.reload();
    this.router.navigate(['/']);
  }
}
