import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInt } from 'src/app/interfaces/user-int';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.css']
})
export class AuthSigninComponent implements OnInit {

  patternmail:any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  createFormGroup() {
    return new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.patternmail)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),

    })
  }

  signInForm: FormGroup;

  user:UserInt = {
    username:'',
    password:'',
    rol:''
  }

  public errores:any
  public response:any
  isShow:boolean = false

  constructor(private authService: AuthService) {
    this.signInForm = this.createFormGroup()
  }

  ngOnInit(): void {
  }

  onResetForm(){
    this.signInForm.reset()
  }
  onSaveForm(){
    if (this.signInForm.valid){
      console.log('this.contactform:',this.signInForm.value)
      this.signin(this.signInForm.value)
      console.log('datos validos')
    }else{
      console.log('datos no validos')
    }
  }

  signin(user:UserInt){
    console.log('first_user:', user)
    this.authService.signIn(user)
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

  get username() { return this.signInForm.get('username')}
  get password() { return this.signInForm.get('password')}


}
