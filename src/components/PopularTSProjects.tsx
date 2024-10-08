import { useState } from "react";
import { useQuery } from "react-query";
import { fetchPopularTSProjects } from "../services/githubService";
import { Repository } from "../types/interfaces";
import { RepositoryItem } from "./RepositoryItem";

export function PopularTSProjects() {
  const [page, setPage] = useState(1);
  const [repos, setRepos] = useState<Repository[]>([]);

  const { isLoading, error, isFetching } = useQuery(
    ["popularTSProjects", page],
    () => fetchPopularTSProjects(page),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        setRepos((prevRepos) => [...prevRepos, ...data.items]);
      }
    }
  );

  if (isLoading && page === 1)
    return <div className='text-center'>Loading...</div>;
  if (error)
    return <div className='text-center text-red-500'>An error occurred:</div>;

  return (
    <div>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {repos.map((repo) => (
          <RepositoryItem key={repo.id} repo={repo} />
        ))}
      </div>

      <div className='text-center mt-8'>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded'
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={isFetching}
        >
          {isFetching ? "Loading..." : "Показать ещё"}
        </button>
      </div>
    </div>
  );
}
