import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getName(name:string) {
    console.log(name);
    return name;
  }
  name="harini";
  getN(par){
    console.log(par);
    return par;
  }
}
