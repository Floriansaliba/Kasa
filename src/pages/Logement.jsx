import Header from "../components/Header/Header";
import housings from "../json/json"
import { useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown/Dropdown";
import Rating from "../components/Rating/Rating";




const Logement = ()=>{
    const {housingId} = useParams()

    const selectedHousing = housings.filter((housing)=>{
        if(housing.id === housingId){
            return housing
        }
    })
    const selectedHousingObject = selectedHousing[0]

    console.log(selectedHousingObject.rating)
   

    return(
        <div>
            <Header />
            <div>
                <img src={selectedHousingObject.cover} alt={selectedHousingObject.title} />
                <h1>{selectedHousingObject.title}</h1>
                <p>{selectedHousingObject.location}</p>
                <p>{selectedHousingObject.host.name}</p>
                <img src={selectedHousingObject.host.picture} alt={selectedHousingObject.host.name} />
                <Rating scaleValue={selectedHousingObject.rating}/>
                <Dropdown title="Description" text={selectedHousingObject.description}/>
                <Dropdown title="Equipements" text={selectedHousingObject.equipments}/>
            </div>
        </div>
    )
}

export default Logement