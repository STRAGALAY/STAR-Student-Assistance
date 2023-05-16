import React, { useEffect, useState, useRef } from "react";

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
    <div>
      <div className="asd">
        <button
          onClick={() => setPopupOpen((prev) => !prev)}
          className="pfpbutton"
        >
          Open
        </button>
        {popupOpen && (
          <div className="bruh">
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
      </div>

      <div className="docs">
        <div ref={allText} className="y">
          <div ref={googleRef} className="docheader">
            Google
          </div>
          <div className="docheaderg">Docs</div>
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
      </div>
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
