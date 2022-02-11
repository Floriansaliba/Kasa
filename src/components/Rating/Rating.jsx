import starEmpty from "../../pictures/star_empty.svg"
import starFull from "../../pictures/star.svg"
import "./Rating.css"

const Rating=(props)=>{

    const scaleValue = props.scaleValue
    const range = [1,2,3,4,5]

return(
    <div className="ratings">
  {range.map((rangeEleme)=>
      scaleValue <= rangeEleme ? <img key={rangeEleme.toString()} className="fullStar" src={starEmpty} alt="star" /> : <img key={rangeEleme.toString()} className="emptyStar" src={starFull} alt="star" />
  )}
    </div>
)
}

export default Rating 