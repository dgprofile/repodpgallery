import { Component, OnInit} from '@angular/core';
import { AuthService } from "../app/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dpgallery';
  constructor(public authService: AuthService){
  }
  ngOnInit(): void {
    console.log("Facebook login");
    this.authService.FacebookAuth(); 
  }
}
