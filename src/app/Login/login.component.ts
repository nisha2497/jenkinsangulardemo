import { Component, OnInit} from '@angular/core';
import { User } from 'src/model/user';
import { UserService } from 'src/service/userservice';

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit
{
    username:string;
    password:string;

   /*  user=[
        new User("nisha","nisha123"),
        new User("nikita","nikita123"),
        new User("rohini","rohini123"),
        new User("rachana","rachana123")
    ]; */

    uarr:User[];
    flag:boolean=true;

   constructor(private uservice:UserService){}

    ngOnInit()
    {
       console.log("In login ngOnInit"); 
       this.uarr=this.uservice.loginAuthentication();
       console.log(this.uarr);

       
    } 

     login()
    {
        for(let i=0;i<this.uarr.length;i++)
        {
            if(this.uarr[i].username==this.username && this.uarr[i].password==this.password)
            {
                alert("successfully Login");
                this.flag=false;
                break;
            }
            else{
                alert("Invalid username and password");
            }
        } 
    }

    
}




