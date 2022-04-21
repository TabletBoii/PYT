import './back.css'
import returnArrow from '../../res/Arrow 1.png'
import {useNavigate} from "react-router-dom";

export default function BackComponent() {
  const history = useNavigate()
  return(
      <div>
        <input type="image" className="returnArrow" src={returnArrow} onClick={()=>history('/')}/>
      </div>
  )
}
