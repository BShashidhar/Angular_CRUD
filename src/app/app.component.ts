import { Component } from '@angular/core';
import { Emp } from './emp';
import { EmpsService } from './emps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD';
  id:any;
  name:any;
  company:any;
  eobj=new Emp();
  msg:any;
  constructor(private ser:EmpsService)//singletone Object
  {
    this.eobj.id="";
    this.eobj.name="";
    this.eobj.compony="";
  }

  //*******add*******/
  add()
  {
    let e = this.eobj;
    this.ser.insert(e).subscribe((data:any)=>
    {
        if(data.message==1)
        {          
          this.msg="Successfully inserted...";
          this.eobj.id="";
          this.eobj.name="";
          this.eobj.compony="";
        }
    });
  }

  //*******Modify*******/
  modify()
  {    
    this.ser.update( this.eobj).subscribe((data:any)=>
    {
        if(data.message==1)
        {          
          this.msg="Successfully updated...";
          this.eobj.id="";
          this.eobj.name="";
          this.eobj.compony="";
        }       
    });
  }

  //*******Delete*******/
  delete()
  {    
    this.ser.delete( this.eobj).subscribe((data:any)=>
    {
        if(data.message==1)
        {          
          this.msg="Successfully deleted...";
          this.eobj.id="";
          this.eobj.name="";
          this.eobj.compony="";
        }       
    });
  }

  //*******Search*******/
  search()
  {
    this.ser.search(this.eobj.id).subscribe((data:any)=>
    {
       if(data.message=="search")
       {
        this.eobj.id="";
        this.eobj.name="";
        this.eobj.compony="";         
       }
       else
       {
         console.log(data);
         this.eobj.name=data[0].name;
         this.eobj.compony=data[0].compony;         
       }
    });
  }


}
