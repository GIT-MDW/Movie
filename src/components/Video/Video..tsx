import { useEffect, useState } from "react";
import "./Video.scss";

export const Video = ({ url }) => {
  const [first, setFirst] = useState(false);

  useEffect(() => {
    let id = setTimeout(() => {
      setFirst(true);
    }, 2000);

    return () => clearTimeout(id);
  }, [first]);

  return <div className="video-wrapper">{first && <video loop src={url} autoPlay={true}></video>};</div>;
};
