import React, { useEffect, useState, useRef } from "react";
import TemporaryDrawer from "../TemporaryDrawer";
import ListItemIcon from "@mui/material/ListItemIcon";
import Button from "@mui/material/Button";
import Person2Icon from "@mui/icons-material/Person2";

export default function Header() {
  const allText = useRef();
  const googleRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  function handleKey(event) {   
    setCount((p) => p + 1); 
  } useEffect(() => {
    
    document.addEventListener('keydown', handleKey)
  }, []);

  useEffect(() => {
    allText.current.addEventListener("mouseover", () => {
      googleRef.current.classList.add("col");
      setHovered(true);
    });
  }, []);

  useEffect(() => {
    allText.current.addEventListener("mouseout", () => {
      googleRef.current.classList.toggle("col");
    });
  }, [hovered]);

  const [popupOpen, setPopupOpen] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="header-2">
      <TemporaryDrawer
        drawerItems={[
          { text: "Goals", icon: ListItemIcon, onClick: () => null },
          { text: "Course Folders", icon: ListItemIcon, onClick: () => null },
          { text: "Resources", icon: ListItemIcon, onClick: () => null },
        ]}
      />
      <a href="/" style={{ textDecoration: "none" }}>
        <div ref={allText} className="brand-name">
          <div ref={googleRef} className="brand-name-1">
            STAR
          </div>
          <div className="brand-name-2">&#8212;SA</div>
        </div>
      </a>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=""
          value={input}
          name="text"
          className="search-input"
          onChange={handleChange}
        />
        <Button className="search-button">Search</Button>
      </form>

      <div className="profile-btn">
        <Button
          onClick={() => setPopupOpen((prev) => !prev)}
          className="pfpbutton"
        >
          <Person2Icon />
          Open
        </Button>
      </div>

      <>
        {popupOpen && (
          <div className="profile-popup">
            <img
              className="pfppic"
              src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
              width="100"
              height="100"
            ></img>
            <h1>profiles</h1>
            <p>johnny</p>
            <p2> # of characters added: {count}</p2>
          </div>
        )}
      </>
    </div>
  );
}
