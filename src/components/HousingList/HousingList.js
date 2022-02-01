import "./HousingList.css";
import housings from "../../json/json";

const HousingList = () => {
  return (
    <ul className="housing_list">
      {housings.map((housing) => {
        return (
          <li key={housing.id} className="housing_frame">
            <div className="housing">
              <img
                className="housing_picture"
                src={housing.cover}
                alt={housing.title}
              ></img>
              <h2 className="housing_title">{housing.title}</h2>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default HousingList;
