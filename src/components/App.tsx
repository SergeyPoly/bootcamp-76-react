import { MouseEvent, useState } from "react";
import ClickCounter from "./ClickCounter";
import CountDisplay from "./CountDisplay";
import css from "./App.module.css";
import { TagData } from "../type/tag";

// type Tags = "a" | "b" | "c" | "d";

export default function App() {
  // const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
  //   console.log("Click:", event);
  // };
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
    console.log(clicks);
  };

  const [isVisible, setIsVisible] = useState(false);

  const updateVisible = () => {
    // setIsVisible((prev) => !prev);
    setIsVisible(!isVisible); // false -> true
  };

  const [tagClicks, setTagClicks] = useState<TagData>({
    a: 0,
    b: 0,
    c: 0,
  });

  // "a" | "b" | "c"
  const changeTagClicks = (key: keyof TagData) => {
    setTagClicks({
      ...tagClicks,
      // a: tagClicks.a + 1
      [key]: tagClicks[key] + 1,
    });
  };

  return (
    <>
      <h1>State in React</h1>
      <CountDisplay count={clicks} />
      <ClickCounter clicks={clicks} onClick={handleClick} />
      <ClickCounter clicks={clicks} onClick={handleClick} />
      <ClickCounter clicks={clicks} onClick={handleClick} />
      <hr />
      <button onClick={updateVisible}>Change visible</button>
      {isVisible && <p>You can see me</p>}
      <hr />
      <span className={css.tag} onClick={() => changeTagClicks("a")}>
        A: {tagClicks.a}
      </span>
      <span className={css.tag} onClick={() => changeTagClicks("b")}>
        B: {tagClicks.b}
      </span>
      <span className={css.tag} onClick={() => changeTagClicks("c")}>
        C: {tagClicks.c}
      </span>
    </>
  );
}
