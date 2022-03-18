import "./Slider.css"
import housings from "../../json/json"
import arrowLeft from "../../pictures/arow_left.svg"
import arrowRight from "../../pictures/arow_right.svg"
import { useParams } from "react-router-dom";
import { useState } from "react";

const Slider = ()=>{
    const {housingId} = useParams()
    const [count, setCount] = useState(0)
    
    const selectedHousing = housings.filter((housing)=>{
        if(housing.id === housingId){
            return housing
        }
        return false
    })
    const selectedHousingObject = selectedHousing[0]

    const pictures = selectedHousingObject.pictures

    const handleDisplay = ()=>{
        if(pictures.length === 1){
            return "none"
        }
        else{
            return "flex"
        }
    }

    const displayProperty = handleDisplay()

    const goLeft = ()=>{
        setCount(count >= 1 ? count -1 : pictures.length -1)
    }

    const goRight = ()=>{
        setCount(count < pictures.length -1 ? count +1 : 0)
    }

    return(
        <div className="picture-container">
        <img className="arow-left" src={arrowLeft} style={{display : displayProperty}} alt="Défiler à gauche" onClick={goLeft} />
        <img className="housing_pic" src={pictures[count]} alt={selectedHousingObject.title} />
        <span className="count">{count +1 + "/" + pictures.length}</span>
        <img className="arow-right" src={arrowRight}  style={{display : displayProperty}} alt="Défiler à droite" onClick={goRight} />
    </div>
    )
}

export default Slider