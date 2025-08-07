import CatProfile from "./CatsProfile/CatProfile";
import Header from "./Header/Header";
import cats from "../cats.json";
import CatsList from "./CatsList/CatList";
import logo from "../assets/app-logo.png";

interface Cat {
  id: number;
  name: string;
  age: number;
  email: string;
  image: string;
  available: boolean;
}

const catsData: Cat[] = cats;
// console.log(catsData);

// isOnline && <p>IS ONLINE</p>
// isOnline ? <p>IS ONLINE</p> : <p>IS OFFLINE</p>
// null, undefined, false

// const list = [<p>Hello</p>, <p>Hello</p>, <p>Hello</p>, <p>Hello</p>];

export default function App() {
  return (
    <>
      {null}
      {undefined}
      {false}
      <Header logoUrl={logo} />
      <CatsList list={catsData} />
    </>
  );
}
