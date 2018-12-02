import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
  UserLogin:User;
  constructor( private router: Router) { }
  ngOnInit() {
      this.UserLogin=JSON.parse(localStorage.getItem("currentUser"));
  }
  activeRoute(routename: string): boolean{
      return this.router.url.indexOf(routename) > -1;
  }
  isLinkActive(url): boolean {
    const queryParamsIndex = this.router.url.indexOf('?');
    const baseUrl = queryParamsIndex === -1 ? this.router.url : 
    this.router.url.slice(0, queryParamsIndex);
    return baseUrl === url;
 }
}
