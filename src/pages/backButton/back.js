import './back.css'
import returnArrow from '../../res/Arrow 1.png'
import {Link} from "react-router-dom";

export default function BackComponent() {

  return(
      <div>
        <Link to="/"><input type="image" className="returnArrow" src={returnArrow}/></Link>
      </div>
  )
}
