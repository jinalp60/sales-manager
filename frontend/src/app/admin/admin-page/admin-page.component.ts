import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../login/login-service.service';
import * as $ from 'jquery';
import { slideInAnimation } from '../../animations';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  animations: [
    slideInAnimation
   ]
})
export class AdminPageComponent implements OnInit {

  constructor(private loginService:LoginServiceService) { }
 
  ngOnInit() {
    this.dropdownSideBarProduct(); 
    this.dropdownSideBarClient();
  }
  prepareRoute(outlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  dropdownSideBarProduct(){
    let dropdown=$('.dropdown-btn-product');
    //var dropdown = document.getElementsByClassName("dropdown-btn");
    let i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  }
  dropdownSideBarClient(){
    let dropdown=$('.dropdown-btn-client');
    //var dropdown = document.getElementsByClassName("dropdown-btn");
    let i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  }
  signOut(): void {
    this.loginService.signOut();
  }
}
