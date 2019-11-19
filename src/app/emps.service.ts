import { Injectable } from '@angular/core';
import { Emp } from './emp';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpsService {
  insert(x:Emp) {
    let url="http://localhost:8082/add";
    
    return this.ajx.post(url,x);
  }
  update(eobj: Emp) {
    let url="http://localhost:8082/eup";
    
    return this.ajx.post(url,eobj);
  }
  delete(eobj: Emp) {
    let url="http://localhost:8082/del";
    
    return this.ajx.post(url,eobj);
  }
  search(x: any) {
    let url="http://localhost:8082/search?id="+x;
    return this.ajx.get(url);
  }

  constructor(private ajx:HttpClient) { }
}
