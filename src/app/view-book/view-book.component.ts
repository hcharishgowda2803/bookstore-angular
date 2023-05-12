import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApicallsService} from "../services/apicalls.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent implements OnInit {

  book_id:any;
  book_details:any

  constructor(
    private router:ActivatedRoute,
    private api:ApicallsService
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe((res:any)=>{
      console.log(res)
      if(res && res.id){
        this.book_id = res.id;
        console.log(this.book_id)
        this.getBookDetails();
      }
    })
  }



  getBookDetails(){
    Swal.showLoading();
     this.api.retrieveData('books',this.book_id).subscribe((res:any)=>{
       if(res && res['response']&& res['response']['data'])
        this.book_details = res['response']['data']
       Swal.close();
     },error => {
       Swal.close();
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
