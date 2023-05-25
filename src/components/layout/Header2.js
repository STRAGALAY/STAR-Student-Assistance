import React, { useEffect, useState, useRef } from "react";
import TemporaryDrawer from "../TemporaryDrawer";
import { ListItemIcon } from "@mui/material";

function MainPage() {
  const allText = useRef();
  const googleRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [input, setInput] = useState("");

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
      <div className="docs">
        <TemporaryDrawer
          drawerItems={[
            { text: "asadsd", icon: ListItemIcon, onClick: () => null },
            { text: "tttttttttttt", icon: ListItemIcon, onClick: () => null },
          ]}
        />
        <div ref={allText} className="brand-name">
          <div ref={googleRef} className="brand-name-1">
            STAR
          </div>
          <div className="brand-name-2">&#8212;SA</div>
        </div>

        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder=""
            value={input}
            name="text"
            className="search-input"
            onChange={handleChange}
          />
          <button className="search-button">search</button>
        </form>

        <div className="profile-btn">
          <button
            onClick={() => setPopupOpen((prev) => !prev)}
            className="pfpbutton"
          >
            Open
          </button>
        </div>
      </div>

      {/* profile popup */}
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
          </div>
        )}
      </>
    </div>
  );
}

export default function App() {
  return (
    <div className="notes-app">
      <MainPage />
    </div>
  );
}
