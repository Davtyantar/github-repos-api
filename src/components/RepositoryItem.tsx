import { Star, GitFork } from "lucide-react";
import { Repository } from "../types/interfaces";

interface RepositoryItemProps {
  repo: Repository;
}

export function RepositoryItem({ repo }: RepositoryItemProps) {
  return (
    <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-200'>
      <h2 className='text-xl font-semibold mb-2'>
        <a
          href={repo.html_url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 hover:underline'
        >
          {repo.name}
        </a>
      </h2>
      <p className='text-gray-600 mb-4'>
        {repo.description || "No description available"}
      </p>
      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <span className='flex items-center'>
            <Star className='w-4 h-4 mr-1 text-yellow-500' />
            <span className='text-yellow-600 font-bold'>
              {repo.stargazers_count.toLocaleString()}
            </span>
          </span>
          <span className='flex items-center'>
            <GitFork className='w-4 h-4 mr-1 text-gray-700' />
            {repo.forks_count.toLocaleString()}
          </span>
        </div>
        <span className='text-sm text-gray-500'>{repo.full_name}</span>
      </div>
    </div>
  );
}
