import { Component, OnInit } from '@angular/core';
import { ProjectInformationService } from 'src/app/services/project-information.service';

@Component({
  selector: 'app-project-information',
  templateUrl: './project-information.component.html',
  styleUrls: ['./project-information.component.css']
})
export class ProjectInformationComponent implements OnInit {

  data=[]
  constructor(private projectInformationService: ProjectInformationService) { }
  
  ngOnInit() {

    this.getAllProjects();  
  }

  getAllProjects() {
    this.projectInformationService.getAllProjects().subscribe((data) => {
      console.log(data)
    }) 
  }

}
