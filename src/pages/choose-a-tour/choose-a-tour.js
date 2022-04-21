import React, {PureComponent, useEffect, useState} from 'react';
import './choose-a-tour.css'

import Flatpickr from 'react-flatpickr'
import "flatpickr/dist/themes/material_red.css"
import axios from "axios";


export default function ChooseATour() {


  //Select Country
  const [country, setCountry] = useState([])
  const [countryValue, setCountryValue] = useState('')

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      /*await axios.post('http://localhost:8080/getinfo/pt/app/', {
        firstname,
        secondname,
        patronymic,
        address,
        selectedDate,
        telephone
      });*/
    }
    catch (e) {
      console.log(e.message)
    }
  }

  useEffect(()=>{
    fetch('http://localhost:8080/getinfo/pt/counties/').then(response=>response.json()).then(response=>setCountry(response))
  },[])


  //Select Date
  const [selectedDate, setSelectedDate] = useState(null)


return(
    <div>
      <form onSubmit={handleSubmit}>
        <div >
          <table className="categories">
            <tr>
              <td>
                <input type="text" className="TourAgentInput" list="data1" onChange={event => setCountryValue(event.target.value)} placeholder="Выберите страну:"/>
                <datalist id="data1" >
                  {
                    country.map(result => {
                      return (<option key={result.countryname} className="TourAgentDatalist">{result.countryname}</option>)
                    })
                  }
                </datalist>
              </td>
              <td>
                <Flatpickr
                    placeholder="Дата вылета:"
                    className="WhenInput"
                    selected={selectedDate}
                    onChange={date=>setSelectedDate(date)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="submit" name="submit" className="searchTourSubmit" value="Найти"/>
              </td>
            </tr>
          </table>
        </div>

      </form>

    </div>
)

}
