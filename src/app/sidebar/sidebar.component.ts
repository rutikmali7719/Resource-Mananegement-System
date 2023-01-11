import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 
  constructor (private readonly rout:ActivatedRoute) {
    
  }

  showMenu=false;
 
  ngOnInit(): void {
    this.showMenu=false
    this.rout.queryParams.subscribe((params:any)=>{
      console.log(params.userType);
      
        if(params.userType === 'admin') {
          this.showMenu = true;
        }
        else {
          this.showMenu = false;
        }
    })
  }
}
