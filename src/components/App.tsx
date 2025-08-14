import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import SearchForm from "./SearchForm";
import { fetchArticles } from "../services/articleService";
import ArticleList from "./ArticleList";
import ReactPaginate from "react-paginate";
import css from "./App.module.css";

export const fetchPerson = async (id: number) => {
  const response = await axios.get(`https://swapi.info/api/people/${id}`);
  return response.data;
};

export default function App() {
  // const [clicks, setClicks] = useState(1);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  // Queries
  // const { data, isError, isLoading } = useQuery({
  //   queryKey: ["character", clicks],
  //   queryFn: () => fetchPerson(clicks),
  // });

  // const handleClick = () => {
  //   setClicks(clicks + 1);
  // };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["articles", query, page],
    queryFn: () => fetchArticles(query, page),
    enabled: query !== "",
    placeholderData: keepPreviousData,
  });

  const handleSubmit = (topic: string) => {
    setPage(1);
    setQuery(topic);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const pageCount = data?.nbPages ?? 0;

  return (
    <>
      <h1>TanStack Query</h1>
      <SearchForm onSubmit={handleSubmit} />
      {data && data.hits.length > 0 && <ArticleList items={data?.hits} />}
      {pageCount > 1 && (
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={({ selected }) => handlePageChange(selected + 1)}
          forcePage={page - 1}
          containerClassName={css.pagination}
          activeClassName={css.active}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
        />
      )}

      {/* <button onClick={handlePageChange}>Page: {page}</button> */}
      <hr />
      {/* <button onClick={handleClick}>Clicks: {clicks}</button>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Some error occured!</p>}
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  );
}
