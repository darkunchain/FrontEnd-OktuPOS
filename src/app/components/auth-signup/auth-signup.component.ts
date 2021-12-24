import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInt } from 'src/app/interfaces/user-int';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {

  patternmail:any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  createFormGroup() {
    return new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.patternmail)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),

    })
  }

  signUpForm: FormGroup;

  user:UserInt = {
    username:'',
    password:'',
    rol:''
  }

  public errores:any
  public response:any
  isShow:boolean = false

  constructor(private authService: AuthService) {
    this.signUpForm = this.createFormGroup()
   }

  ngOnInit(): void {
  }

  onResetForm(){
    this.signUpForm.reset()
  }
  onSaveForm(){
    if (this.signUpForm.valid){
      console.log('this.contactform:',this.signUpForm.value)
      this.signup(this.signUpForm.value)
      console.log('datos validos')
    }else{
      console.log('datos no validos')
    }
  }

  signup(user:UserInt){
    console.log('first_user:', user)
    this.authService.signUp(user)
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

  get username() { return this.signUpForm.get('username')}
  get password() { return this.signUpForm.get('password')}

}
