import "./NavBar.css";
import { useState } from "react";
const NavBar = ({ input_value }: { input_value: string }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="topbar">
      <div className="web-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-film"
          viewBox="0 0 16 16"
        >
          <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
        </svg>
        <div className="title">Movie Streaming</div>
      </div>
      <div className="search-container">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `/?search=${search}`;
          }}
        >
          <input
            type="text"
            placeholder="search"
            defaultValue={input_value}
            className="search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};
export default NavBar;
