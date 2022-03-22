import Header from "../components/Header/Header";
import housings from "../json/json"
import { useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown/Dropdown";
import Rating from "../components/Rating/Rating";
import Slider from "../components/Slider/Slider"
import Footer from "../components/Footer/Footer"
import Error from "../pages/404"
import "./Logement.css"




const Logement = ()=>{
    const {housingId} = useParams()

    const selectedHousing = housings.filter((housing)=>{
        if(housing.id === housingId){
            return housing
        }

        return false
    })

    if(selectedHousing.length === 1){
    const selectedHousingObject = selectedHousing[0]

    const equipments = ()=>{
        let equipmentKey = 0

    return selectedHousingObject.equipments.map((equipment)=>{
            equipmentKey++
            return (
                <li className="equipment" key={equipmentKey}>{equipment}</li>
            )
        })
    }

    const list = equipments()

    const tags = ()=>{
        let keyTag = 0
        return selectedHousingObject.tags.map((tag)=>{
            keyTag++
            return(
                <li className="tag" key={keyTag} >{tag}</li>
            )
        })
    }

    const listTag = tags()


    return(
        <div className="housing-frame">
            <Header />
            <div className="housing-section">
                <Slider />
                <div className="presentation">
                <div className="section-title">
                    <h1 className="section-title_title">{selectedHousingObject.title}</h1>
                    <p className="section-title_location">{selectedHousingObject.location}</p>
                    <ul className="taglist">{listTag}</ul>
                </div>
                <div className="section-host">
                    <div className="host">
                        <p className="host_name">{selectedHousingObject.host.name}</p>
                        <img className="host_pic" src={selectedHousingObject.host.picture} alt={selectedHousingObject.host.name} />
                    </div>
                    <Rating scaleValue={selectedHousingObject.rating}/>
                </div>
                </div>
                <div className="section-dropdown">
                    <div className="dropdown-description">
                        <Dropdown  title="Description" text={selectedHousingObject.description}/>   
                    </div>
                    <div className="dropdown-equipments">
                    <Dropdown  title="Equipements" list={list} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )}
    else{
        return(
            <div>
                <Error />
            </div>
        )
    }
}

export default Logement