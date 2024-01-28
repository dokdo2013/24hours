export type ProjectInfo = {
  isPublicRepository: boolean;
  repositoryUrl: string;
  isServiceUrlAvailable: boolean;
  serviceUrl: string;
};

export type Project = {
  /**
   * The priority of the project.
   */
  priority: number;

  /**
   * The name of the project.
   */
  name: string;

  /**
   * The short name of the project. (only lowercase letters, number and hyphens)
   */
  shortName: string;

  /**
   * The description of the project.
   */
  description: string;

  /**
   * The logo URL of the project.
   */
  logoUrl: string;

  /**
   * The tags of the project. (Can be empty)
   */
  tags: string[];

  /**
   * The status of the project.
   */
  status: "standby" | "inProgress" | "done";

  /**
   * The start date of the project.
   */
  startDate?: string | null;

  /**
   * The end date of the project.
   */
  endDate?: string | null;

  /**
   * The project information.
   */
  info?: ProjectInfo;
};
