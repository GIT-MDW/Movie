import block from "bem-cn";
import { useContext, useEffect } from "react";
import { ReactComponent as Play } from "../../assets/icons/play.svg";
import { selectBackgroudnImg } from "../../context/actions";
import { DataContext } from "../../context/DataContext";
import { IContext } from "../../ts/global";
import "./MainVideo.scss";

const b = block("MainVideo");
export const MainVideo = () => {
  const {
    state: { Featured, selectedFilm },
    dispatch,
  } = useContext<IContext>(DataContext);

  useEffect(() => {
    dispatch(selectBackgroudnImg(Featured.CoverImage));
  }, [dispatch, Featured.CoverImage]);

  useEffect(() => {
    selectedFilm && dispatch(selectBackgroudnImg(selectedFilm.CoverImage));
  }, [selectedFilm, dispatch]);

  return (
    <div className={b()}>
      <div className={b("info")}>
        <p className={b("genre")}>{selectedFilm?.Category || Featured.Category}</p>
        <div className={b("title")}>
          <img
            src={require(`../../assets/${selectedFilm?.TitleImage || Featured.TitleImage}`)}
            alt={selectedFilm?.CoverImage || Featured.CoverImage}
          />
        </div>
        <div className={b("data-duration")}>
          <span className={b("year")}>{selectedFilm?.ReleaseYear || Featured.ReleaseYear}</span>
          <span className={b("age")}>{selectedFilm?.MpaRating || Featured.MpaRating}</span>
          <span className={b("hour")}>{selectedFilm?.Duration || Featured.Duration}</span>
          <span className={b("minute")}>48m</span>
        </div>
        <p className={b("description")}>{selectedFilm?.Description || Featured.Description}</p>
        <div className={b("btns")}>
          <button className={b("btns__play")}>
            <Play /> Play
          </button>
          <button className={b("btns__more-info")}>More Info</button>
        </div>
      </div>
    </div>
  );
};
