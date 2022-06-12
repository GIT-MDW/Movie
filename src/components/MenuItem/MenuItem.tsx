import block from "bem-cn";
import React, { useState } from "react";
import { ReactComponent as Genres } from "../../assets/icons/genres.svg";
import { ReactComponent as Home } from "../../assets/icons/home.svg";
import { ReactComponent as Movies } from "../../assets/icons/movies.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as TvShows } from "../../assets/icons/tv-shows.svg";
import { ReactComponent as WatchLater } from "../../assets/icons/watch-later.svg";
import "./MenuItem.scss";

const b = block("menu");

const ICONS = {
  Search: <Search className="ico" />,
  Home: <Home className="ico" />,
  "Tv Shows": <TvShows className="ico" />,
  Movies: <Movies className="ico" />,
  Genres: <Genres className="ico" />,
  "Watch Later": <WatchLater className="ico" />,
};

const MenuItem = () => {
  const [active, setActive] = useState("");
  const handleSelect = (e: React.SyntheticEvent) => {
    setActive(e.currentTarget.id);
  };

  return (
    <div className="wrapper">
      <div className={b("user")}>
        <img
          className={b("user-img")}
          src={"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"}
          alt="pic"
        />
        <span className={b("user-name")}>Daniel</span>
      </div>
      <ul className={b()}>
        {Object.entries(ICONS).map((elem) => (
          <div className={b("items", { active: elem[0] === active })} key={elem[0]}>
            <div className={b("items-group")} id={elem[0]} onClick={(e) => handleSelect(e)}>
              <div className={b("item", { active: elem[0] === active })}>{elem[1]}</div>
              <span className={b("text")}>{elem[0]}</span>
            </div>
          </div>
        ))}
      </ul>

      <ul className={b("setting")}>
        <li className={b("setting-item")}>Language</li>
        <li className={b("setting-item")}>get help</li>
        <li className={b("setting-item")}>Exit</li>
      </ul>
    </div>
  );
};

export default MenuItem;
