import { QueryClient, QueryClientProvider } from "react-query";
import { PopularTSProjects } from "./components/PopularTSProjects";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='min-h-screen bg-gray-100 py-8'>
        <div className='container mx-auto px-4'>
          <h1 className='text-3xl font-bold mb-8 text-center'>
            Популярные проекты TypeScript на GitHub
          </h1>
          <PopularTSProjects />
        </div>
      </div>
    </QueryClientProvider>
  );
}
