import Link from "next/link";
import { projects } from "../../constants/projects";
import { Project } from "@24hours/types/project";

const ProjectStatus = (
  status: Project["status"],
  startDate?: Project["startDate"],
  endDate?: Project["endDate"]
) => {
  switch (status) {
    case "standby":
      return (
        <div className="mt-1 flex items-center gap-x-1.5">
          <div className="flex-none rounded-full bg-gray-400/20 p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-gray-400" />
          </div>
          <p className="text-xs leading-5 text-gray-400">Standby</p>
        </div>
      );
    case "inProgress":
      return (
        <div className="mt-1 flex items-center gap-x-1.5">
          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
          <p className="text-xs leading-5 text-gray-400">
            In progress... (from {startDate})
          </p>
        </div>
      );
    case "done":
      return (
        <p className="mt-1 text-xs leading-5 text-gray-400">
          {startDate} ~ {endDate}
        </p>
      );
    default:
      return null;
  }
};

export default function StackedLists() {
  return (
    <ul role="list" className="divide-y divide-gray-800 p-4 xl:p-0">
      {projects.map((project) => (
        <li
          className=" hover:bg-gray-800/20 cursor-pointer"
          key={project.description}
        >
          <Link
            href={`/project/${project.shortName}`}
            className="flex justify-between gap-x-6 px-2 py-5"
          >
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-800"
                src={project.logoUrl}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-white">
                  {project.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <div className="flex gap-1">
                {project.tags
                  ? project.tags.map((tag, i) => (
                      <span
                        key={`${tag}.${i}`}
                        className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20"
                      >
                        <span className="select-none mr-1">#</span>
                        {tag}
                      </span>
                    ))
                  : null}
              </div>
              {ProjectStatus(
                project.status,
                project?.startDate,
                project?.endDate
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
