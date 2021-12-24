import { Component, OnInit } from '@angular/core';
import { UserInt } from 'src/app/interfaces/user-int';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.css']
})
export class AuthSigninComponent implements OnInit {

  user:UserInt = {
    username:'',
    password:'',
    rol:''
  }

  public errores:any
  public response:any
  isShow:boolean = false

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signin(){
    console.log('first_user:', this.user)
    this.authService.signIn(this.user)
    .subscribe(
      res => {
        console.log('response:',res, 'res.status:' ,res)
        if(res){
          this.response = res
          this.isShow = true;
        }
      },
      err => {
        console.log('error:',err.error)
        this.errores = err.error
        this.isShow = false;
      })
  }

}
