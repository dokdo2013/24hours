import Header from "@/app/components/Header";
import { projects } from "@/constants/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

const getProject = async (slug: string) => {
  // FIXME: Change to API call (NestJS)
  const project = projects.find((project) => project.shortName === slug);

  return project;
};

const ProjectPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const project = await getProject(id);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <Header fixed />

      <main className="relative isolate pt-20">
        <section className="border-b-[1px] border-gray-500/20 py-8">
          <div className="max-w-5xl mx-auto my-0 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src={project.logoUrl} alt={project.name} className="w-12" />
              <div className="flex flex-col items-start">
                <span className="text-sm text-gray-400 leading-[10px]">
                  #{project.priority}
                </span>
                <h1 className="text-white text-2xl font-semibold">
                  {project.name}
                </h1>
              </div>
            </div>

            {project.info ? (
              <div className="flex gap-3">
                {project.info.isPublicRepository ? (
                  <Link href={project.info.repositoryUrl} target="_blank">
                    <button className="text-sm text-white bg-gray-800 px-4 py-2 rounded-md">
                      Git Repository
                    </button>
                  </Link>
                ) : (
                  <div></div>
                )}

                {project.info.isServiceUrlAvailable ? (
                  <Link href={project.info.serviceUrl} target="_blank">
                    <button className="text-sm text-black bg-gray-100 px-4 py-2 rounded-md">
                      Visit
                    </button>
                  </Link>
                ) : (
                  <div></div>
                )}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </section>

        <section className="mt-10 py-8">
          <div className="max-w-5xl mx-auto my-0">
            <div className="flex flex-col gap-5 text-center">
              <h2 className="text-white text-xl font-semibold">잠깐!</h2>
              <p className="text-white font-thin">
                아직 내부 콘텐츠는 준비 중이에요. 조금만 더 기다려주세요
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectPage;
