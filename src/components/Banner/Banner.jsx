import "./Banner.css";
import bannerPicture from "../../pictures/banner_image.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerPicture} className="banner_picture" alt="Banner"></img>
      <div className="background"></div>
      <h1 className="banner_title">Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner;
