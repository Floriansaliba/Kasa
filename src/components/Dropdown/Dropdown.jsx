import "./Dropdown.css"
import chevronDown from "../../pictures/chevron_down.svg"
import chevronUp from "../../pictures/chevron_up.svg"


const handleClick = (e)=>{
if(e.target.className === "dropdown_chevron-down"){
    e.target.style.display = "none"
    e.target.nextSibling.style.display = "flex"
    e.target.parentNode.nextSibling.style.display = "flex"
}
else if (e.target.className === "dropdown_chevron-up"){
    e.target.style.display = "none"
    e.target.previousSibling.style.display = "flex"
    e.target.parentNode.nextSibling.style.display = "none"
}
}

const Dropdown = (props)=>{
return (
    <div className="dropdown">
        <div className="dropdown_header" >
            <h2 className="dropdown_title">{props.title}</h2>
            <img className="dropdown_chevron-down" src={chevronDown} alt="Dérouler" onClick={handleClick} />
            <img className="dropdown_chevron-up" src={chevronUp} alt="Fermer" onClick={handleClick}/>
        </div>
        <div className="dropdown_paragraph">
            <p className="dropdown_text">{props.text}</p>
        </div>
    </div>
)
}

export default Dropdown