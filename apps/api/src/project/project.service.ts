import { Injectable } from '@nestjs/common';
import { Project, projects } from './dto/project.dto';

@Injectable()
export class ProjectService {
  constructor() {}

  getProjects(): Project[] {
    return projects;
  }
}
