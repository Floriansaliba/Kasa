import "./HousingList.css";
import housings from "../../json/json";
import { Link } from "react-router-dom";

const HousingList = () => {
  return (
    <ul className="housing_list">
      {housings.map((housing) => {
        return (
          <Link key={housing.id} to={"/logement/" + housing.id}>
          <li id={housing.id} className="housing_frame">
            <div className="housing">
              <img
                className="housing_picture"
                src={housing.cover}
                alt={housing.title}
              ></img>
              <h2 className="housing_title">{housing.title}</h2>
            </div>
          </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default HousingList;
