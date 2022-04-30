import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicsumService {

  constructor(private httpclient:HttpClient) { }
  
    getPicsum(){

      return this.httpclient.get('https://picsum.photos/v2/list?page=1&limit=1083');

      
    
    }

  }



