import { Layout } from "antd";
import "antd/dist/antd.min.css";
import block from "bem-cn";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import { IContext } from "../../ts/global";
import { MainVideo } from "../MainVideo/MainVideo";
import MenuItem from "../MenuItem/MenuItem";
import { TrendingMovies } from "../TrendingMovies/TrendingMovies";
import { Video } from "../Video/Video.";
import "./PageLayout.scss";

const b = block("layout");
const { Sider, Content } = Layout;

export const PageLayout = () => {
  const {
    state: { Featured, selectedFilm },
  } = useContext<IContext>(DataContext);

  const style = {
    background: `url(${require(`../../assets/${Featured.CoverImage}`)})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "right",
  };

  return (
    <Layout className={b()}>
      <Sider className={b("sidebar")} width={70}>
        <MenuItem />
      </Sider>
      <Layout className={b()}>
        <Content style={selectedFilm ? {} : style}>
          <Video url={selectedFilm?.VideoUrl} />
          <MainVideo />
          <TrendingMovies />
        </Content>
      </Layout>
    </Layout>
  );
};
