import React, {PureComponent, useEffect, useState} from 'react';
import './choose-a-tour.css'
import palmTreeImg from '../../res/samples/1859-Martinique.web.jpg'



export default function ChooseATour() {

  const [state, setState] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8080/getinfo/pt/tours').then(response=>response.json()).then(response=>setState(response))
  })


return(
    <div>
      <div className="TourAgent">Турагент:</div>
        <input type="text" className="TourAgentInput" list="data1"/>
        <datalist id="data1">
          {
            state.map(result => {
              return (<option key={result.touragentname}>{result.touragentname}</option>)
            })
          }
        </datalist>

        <div className="Where">Куда:</div>
        <input type="text" className="WhereInput"/><img/>
        <div className="Period">Период вылета:</div>
        <input type="text" className="PeriodInput"/><img/>
        <div className="Hotel">Отель:</div>
        <input type="text" className="HotelInput"/><img/>


        <img src={palmTreeImg} className="palmTreeImg"/>
    </div>
)

}
