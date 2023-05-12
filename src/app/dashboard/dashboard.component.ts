import { Component, OnInit } from '@angular/core';
import {ApicallsService} from "../services/apicalls.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bookData:any

  constructor(
    private api: ApicallsService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(){
    Swal.showLoading();
    this.api.collections('books').subscribe((res:any)=>{
     if(res && res['response'] && res['response']['data']){
       this.bookData = res['response']['data']
     }
     Swal.close();
    },error => {
      Swal.close()
      console.log(error)
      if(error && error.error.response && error.error.response.data)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.response.data,
          width: '50%'
        })
    })
  }

  navToDetails(id:any){
    this.router.navigateByUrl(`/layout/${id}`,)
  }


  addCart(){

  }

}
