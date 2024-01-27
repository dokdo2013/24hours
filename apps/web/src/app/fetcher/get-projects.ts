import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useProjects = () => {
  const { data, error } = useSWR("/api/projects", fetcher);

  return {
    projects: data,
    isLoading: !error && !data,
    isError: error,
  };
};
