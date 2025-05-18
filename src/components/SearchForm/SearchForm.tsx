import css from "./SearchForm.module.css";

export default function SearchForm({ onSearch }) {
  return (
    <form className={css.form}>
      <input className={css.input} type="text" name="topic" />
      <button type="submit">Search</button>
    </form>
  );
}
