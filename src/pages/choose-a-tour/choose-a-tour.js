import React, {PureComponent, useEffect, useState} from 'react';
import './choose-a-tour.css'

import Flatpickr from 'react-flatpickr'
import "flatpickr/dist/themes/material_red.css"
import axios from "axios";


export default function ChooseATour() {
  //All countries

  //Select Country
  const [country, setCountry] = useState([])
  const [countryValue, setCountryValue] = useState('')
  const [tourList, setTourList] = useState([])
  //Select City

  const selectAllCounties = (e) =>{
    e.preventDefault()
    try{

    }catch(e){

    }
  }


  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      await axios.post('http://localhost:8080/getinfo/pt/app/', {
        /*firstname,
        secondname,
        patronymic,
        address,
        selectedDate,
        telephone*/
      });
    }
    catch (e) {
      console.log(e.message)
    }
  }

  useEffect(()=>{
    fetch('http://localhost:8080/getinfo/pt/counties/').then(response=>response.json()).then(response=>setCountry(response))
  },[])
  /*useEffect(()=>{
    fetch('http://localhost:8080/getinfo/pt/cities/').then(response=>response.json()).then(response=>setCountry(response))
  },[])*/
  useEffect(()=>{
    fetch('http://localhost:8080/getinfo/admin/tour-list/').then(response=>response.json()).then(response=>setTourList(response))
  },[])


  //Select Date
  const [selectedDate, setSelectedDate] = useState(null)


return(
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <table className="categories">
            <tr>
              <td>
                <input type="text" className="TourAgentInput" list="data1" onChange={event => setCountryValue(event.target.value)} placeholder="Выберите страну:"/>
                <datalist id="data1" >
                  <option key="allCountries" className="TourAgentDatalist" onClick={selectAllCounties}>Все</option>
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
          </table>
        </div>

      </form>
      <div className="tourList">
        {
          Array.isArray(tourList)?
          tourList.map(result=>{

            return(<div key={result.tourid} className="tourListItem card mb-3">
                    <div className="col-md-8">
                      <h2 className="tourListName card-header card-title"><a>{result.tourname}</a></h2>
                      <div className="card-body">
                        <div className="tourListDescription card-text">{result.tourdescription}</div>
                      </div>
                    </div>
                  </div>)
          }):""
        }
      </div>

    </div>
)

}
