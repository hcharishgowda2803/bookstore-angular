import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApicallsService} from "../../services/apicalls.service"
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:any

  constructor(
    public fb:FormBuilder,
    private apiCall:ApicallsService,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:[],
      password:[]
    })
  }


  login(){
    let body= {
      email_address:this.loginForm.value.email,
      password:this.loginForm.value.password
    }
    Swal.showLoading()
    this.apiCall.login(body).subscribe((res:any)=>{
      if(res && res['token']){
        localStorage.setItem('book_token', JSON.stringify(res['token']))
      }
      Swal.close()
      this.router.navigate(['/layout/home'])
    },error => {
      Swal.close()
      if(error && error.error.response && error.error.response.data){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.response.data,
          width: '50%'
        })
      }
    })
  }

}
