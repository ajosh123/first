import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data="happy banking with us"
  pdata="enter account number"
constructor() {}
ngOnInit(): void {
  
}
login(a:any){
  console.log(a.value);
  
 alert('login clicked')
}
acnoChange(event:any){
console.log(event.target.value);

}
}
