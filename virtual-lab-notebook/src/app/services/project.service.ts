import { Injectable } from '@angular/core';
import { project } from './project';
//import { projectS } from './mock-projects';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class projectService {
  private projectsUrl = '/api/v1/projects';

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    ) { }

  getProjects = (): Observable<project[]> => {
    this.messageService.add('About to fetch data from API');
    return this.http.get<Project[]>(this.projectsUrl);
  }

  getProject = (id: string): Observable<project> => {
    this.messageService.add(`Fetched data for ID ${id} from API`);
    return this.http.get<project>(`${this.projectsUrl}/${id}`);
  }

  deleteproject = (id: string): Observable<Object> => {
    return this.http.delete(`${this.projectsUrl}/${id}`);
  }

  updateproject = (id: string, project: project): Observable<project> => {
    return this.http.put<project>(`${this.projectsUrl}/${id}`, project);
  }

  createproject = (project: project): Observable<project> => {
    return this.http.post<project>(`${this.projectsUrl}`, project)
  }
}