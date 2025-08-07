import css from "./Header.module.css";

interface HeaderProps {
  logoUrl: string;
}

export default function Header({ logoUrl }: HeaderProps) {
  return (
    <header>
      <h1>TOP CATS</h1>
      <img src={logoUrl} alt="logo" width={100} />
      <ul className={css.container}>
        <li>A</li>
        <li>B</li>
        <li>C</li>
      </ul>
    </header>
  );
}
