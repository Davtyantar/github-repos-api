import axios, { AxiosError } from "axios";

const GITHUB_API_URL = "https://api.github.com/search/repositories";

interface GitHubErrorResponse {
  message: string;
}

export async function fetchPopularTSProjects(page = 1) {
  try {
    const response = await axios.get(GITHUB_API_URL, {
      params: {
        q: "language:typescript",
        sort: "stars",
        order: "desc",
        per_page: 9,
        page
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<GitHubErrorResponse>;
      console.error(axiosError.response?.data);
      throw new Error(axiosError.response?.data.message);
    } else {
      throw new Error("Произошла непредвиденная ошибка");
    }
  }
}
