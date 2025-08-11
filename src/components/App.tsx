import { useState } from "react";
import OrderForm from "./OrderForm/OrderForm";
import SearchForm from "./SearchForm/SearchForm";
import ArticleList from "./ArticleList/ArticleList";
import type { Article } from "../types/article";
import { getArticles } from "../services/article";
import { PulseLoader } from "react-spinners";

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic: string) => {
    try {
      setError(false);
      setArticles([]);
      setLoading(true);

      const articlesData = await getArticles(topic);
      setArticles(articlesData);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Forms and HTTP requests</h1>
      {/* <OrderForm /> */}
      <SearchForm onSearch={handleSearch} />
      {/* {loading && <strong>Loading...</strong>} */}
      <PulseLoader size={10} loading={loading} />
      {error && <strong>Something went wrong, please try again</strong>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}
