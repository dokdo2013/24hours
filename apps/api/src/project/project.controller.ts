import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProjectService } from './project.service';
import { Project } from './dto/project.dto';

@Controller('project')
@ApiTags('Project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  @ApiOperation({ summary: 'Get all projects' })
  getProjects(): Project[] {
    const projects = this.projectService.getProjects();

    return projects;
  }
}
