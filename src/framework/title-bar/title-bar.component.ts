import { Component, OnInit } from '@angular/core';
import { UserApi } from "framework/users/user-api";

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {
  loginStatus:boolean;
  constructor(private _userApi: UserApi) { }

  ngOnInit() {
    this.loginStatus=this._userApi.isUserLoggedIn();
    console.log('User logn status ' , this.loginStatus);
  }

  logOut(){
    this._userApi.logout().subscribe((data)=>{
      console.log("Sucessfully logged out. ",data);
    },(err)=>{
      console.log('Sign out failed')
    })
  }

}
