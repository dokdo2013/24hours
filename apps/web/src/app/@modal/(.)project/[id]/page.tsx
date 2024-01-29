"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { getProjectClient } from "@/app/project/[id]/page";
import { notFound } from "next/navigation";
import Link from "next/link";

const ProjectModal = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const id = params.id;
  const project = getProjectClient(id);

  if (!project) {
    notFound();
  }

  function onDismiss() {
    router.back();
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        open={isOpen}
        onClose={() => {
          onDismiss();
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h2"
                  className="text-xl font-medium leading-6 text-white"
                >
                  {project.name}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-white">{project.description}</p>
                </div>

                <div className="flex mt-4 justify-end gap-2">
                  {project.info?.isServiceUrlAvailable ? (
                    <Link href={project.info.serviceUrl}>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        사이트로 이동
                      </button>
                    </Link>
                  ) : (
                    <></>
                  )}
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => {
                      onDismiss();
                    }}
                  >
                    닫기
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectModal;
