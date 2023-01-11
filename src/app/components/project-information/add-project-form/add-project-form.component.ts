import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import {
  faCirclePlus,
  faEye,
  faFilePen,
  faPenToSquare,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { ProjectModel } from 'src/app/model/projectInfo.model';
import { ProjectInformationService } from 'src/app/services/project-information.service';

@Component({
  selector: 'app-add-project-form',
  templateUrl: './add-project-form.component.html',
  styleUrls: ['./add-project-form.component.css'],
})
export class AddProjectFormComponent implements OnInit {

  ngOnInit() {
    this.addProject = this.formBuilder.group({
      projectName: ['', [Validators.required, Validators.minLength(3)]],
      clientid: ['', [Validators.required]],
      clientEmail: ['', [Validators.required, Validators.email]],
      clientName: ['', [Validators.required, Validators.minLength(3)]],
    });

    this.getAllProjects();
  }

  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectInformationService
  ) {}

  projects: any = [];
  projectById:any=[]
  addProject!: FormGroup;
  submitted: boolean = false;
  searchText = '';
  faCirclePlus = faCirclePlus;
  faPenToSquare = faPenToSquare;
  faTrashCan = faTrashCan;
  faEye=faEye

  //model obj
  projectInfoObj: ProjectModel = new ProjectModel();

  onSubmit() {
    console.log(this.addProject.value);
    this.addProject.reset();
  }

  //getAllProjects

  getAllProjects() {
    this.projectService.getAllProjects().subscribe((project) => {
      this.projects = project;
    });
  }

  //addProject to DB
  addProjectToDB() {
    this.projectInfoObj.projectName = this.addProject.value.projectName;
    this.projectInfoObj.clientId = this.addProject.value.clientid;
    this.projectInfoObj.clientEmail = this.addProject.value.clientEmail;
    this.projectInfoObj.clientName = this.addProject.value.clientName;

    this.projectService.addProject(this.projectInfoObj).subscribe(
      (res) => {
        console.log(res);
        alert('project Added Successfully');
        this.getAllProjects();
        this.addProject.reset();
      },
      (err) => {
        alert('Someting Went Wrong');
      }
    );
  }

  //deleteProject
  deleteProject(project: any) {
    this.projectService.deleteProject(project.projectId).subscribe(
      (res) => {
        alert('project deleted successfully');
        this.getAllProjects();
      },
      (err) => {
        alert('something Wrong');
      }
    );
  }

  //updateProject
  openEdit(project: any) {
    this.projectInfoObj.projectId = project.projectId;
    this.addProject.controls['projectName'].setValue(project.projectName);
    this.addProject.controls['clientid'].setValue(project.clientid);
    this.addProject.controls['clientEmail'].setValue(project.clientEmail);
    this.addProject.controls['clientName'].setValue(project.clientName);
  }

  updateProject() {
    this.projectInfoObj.projectName = this.addProject.value.projectName;
    this.projectInfoObj.clientId = this.addProject.value.clientid;
    this.projectInfoObj.clientEmail = this.addProject.value.clientEmail;
    this.projectInfoObj.clientName = this.addProject.value.clientName;

    this.projectService.updateProject(this.projectInfoObj,this.projectInfoObj.projectId ).subscribe((res) => {
      alert("updated successfully");
      this.addProject.reset();
      this.getAllProjects()
    })
  }

  getProjectById(project:any) {
    this.projectService.getProjectById(project.projectId).subscribe((res) => {
      console.log(res); 
      this.projectById = res;
    })
  }


}
