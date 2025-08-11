import axios from "axios";
import type { Article } from "../types/article";

interface ArticleResponse {
  hits: Article[];
}

const myKey = import.meta.env.VITE_API_KEY;

const headers = {
  Authorization: `Bearer ${myKey}`,
};

export const getArticles = async (topic: string) => {
  const response = await axios.get<ArticleResponse>(
    `https://hn.algolia.com/api/v1/search?query=${topic}`,
    { headers }
  );

  return response.data.hits;
};
