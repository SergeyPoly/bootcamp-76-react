import axios from "axios";
import { useState, useEffect } from "react";
import Timer from "./Timer";
import Sidebar from "./Sidebar";

const key = "sidebar-status";

export default function App() {
  const [character, setCharacter] = useState(null);
  const [click, setClick] = useState(1);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(() => {
    const savedStatus = localStorage.getItem(key);
    if (savedStatus !== null) {
      return JSON.parse(savedStatus);
    }

    return false;
  });

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(open));
  }, [open]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://swapi.info/api/people/${click}`,
        {
          params: {
            query: "test",
          },
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        }
      );

      setCharacter(response.data);
    }

    getData();
  }, [click]);

  return (
    <>
      <h1>Side effects</h1>
      {/* <button onClick={() => setClick(click + 1)}>Click: {click}</button> */}
      {/* <pre>{JSON.stringify(character, null, 2)}</pre> */}
      {/* <button onClick={() => setVisible(!visible)}>Toggle</button> */}
      {/* {visible && <Timer />} */}
      <button onClick={onOpen}>Open</button>
      {open && <Sidebar onClose={onClose} />}
    </>
  );
}
