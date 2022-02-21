import "./Dropdown.css"
import chevronDown from "../../pictures/chevron_down.svg"
import chevronUp from "../../pictures/chevron_up.svg"


const handleClick = (e)=>{
    const target = e.target
if(target.className === "dropdown_chevron-down"){
    target.style.display = "none"
    target.nextSibling.style.display = "flex"
    target.parentNode.nextSibling.style.display = "flex"
}
else if (target.className === "dropdown_chevron-up"){
    target.style.display = "none"
    target.previousSibling.style.display = "flex"
    target.parentNode.nextSibling.style.display = "none"
}
}

const Dropdown = ({title, text, list})=>{
return (
    <div className="dropdown">
        <div className="dropdown_header" >
            <h2 className="dropdown_title">{title}</h2>
            <img className="dropdown_chevron-down" src={chevronDown} alt="Dérouler" onClick={handleClick} />
            <img className="dropdown_chevron-up" src={chevronUp} alt="Fermer" onClick={handleClick}/>
        </div>
        <div className="dropdown_paragraph">
           {text ? <p className="dropdown_text">{text}</p> : <ul className="equipment-list">{list}</ul>} 
        </div>
    </div>
)
}

export default Dropdown