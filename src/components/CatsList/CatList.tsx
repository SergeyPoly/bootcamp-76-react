import CatProfile from "../CatsProfile/CatProfile";
import css from "./CatList.module.css";

interface Cat {
  id: number;
  name: string;
  age: number;
  email: string;
  image: string;
  available: boolean;
}

interface CatListProps {
  list: Cat[];
}

export default function CatsList({ list }: CatListProps) {
  const parsedList = list.map((cat) => (
    <li key={cat.id}>
      <CatProfile data={cat} />
    </li>
  ));

  return <ul className={css.container}>{parsedList}</ul>;
}
