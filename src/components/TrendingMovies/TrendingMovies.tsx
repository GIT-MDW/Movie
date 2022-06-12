import block from "bem-cn";
import Carousel from "nuka-carousel";
import { useContext, useEffect, useState } from "react";
import { selectFilm } from "../../context/actions";
import { DataContext } from "../../context/DataContext";
import { IContext, ITendingNow } from "../../ts/global";
import "./TrendingMovies.scss";
const b = block("trendingMovies");

export const TrendingMovies = () => {
  const [data, setData] = useState<ITendingNow[]>();

  const {
    state: { TendingNow },
    dispatch,
  } = useContext<IContext>(DataContext);

  useEffect(() => {
    setData(TendingNow);
  }, []);

  return (
    <div className={b()}>
      <>
        <h3 className={b("title")}>Trending Now</h3>
        <div className={b("films")}>
          <Carousel wrapAround={true} slidesToShow={8} autoplay>
            {data?.map((film) => (
              <img
                className={b("film-img")}
                src={require(`../../assets/${film.CoverImage}`)}
                alt={film.Title}
                onClick={() => {
                  sessionStorage.setItem("movieID", film.Id);
                  return dispatch(selectFilm(film));
                }}
                key={film.Id}
              />
            ))}
          </Carousel>
        </div>
      </>
    </div>
  );
};
