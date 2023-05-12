import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApicallsService {

  static apiBaseUrl = 'http://3.110.142.165:3000';
  // static apiBaseUrl = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) {
  }


  apiHeader() {
    let token: any;
    if (localStorage.getItem('book_token')) {
      token = localStorage.getItem('book_token');
    }
    return new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', token)
  }


  login(postData:any) {
    return this.http.post(ApicallsService.apiBaseUrl+'/auth/login',postData);
  }


  collections(entity:any){
    const header = this.apiHeader()
    return this.http.get(ApicallsService.apiBaseUrl+`/${entity}`,{headers:header})
  }

  retrieveData(entity:any,id:any){
      const header = this.apiHeader();
      return this.http.get(ApicallsService.apiBaseUrl+`/${entity}/${id}`,{headers:header})
  }

}
