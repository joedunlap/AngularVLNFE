import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  _id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'project-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Project[]>('http://localhost:3000/api/v1/projects').subscribe(
      data => this.projects = data,
      error => console.error('Error fetching projects:', error)
    );
  }
}