
import React, {useState} from "react";
import './app-panel.css'
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_red.css"
import axios from "axios";
import {css} from "glamor";
import { ToastContainer, toast } from 'react-toastify'

toast.configure()
export default function AppPanel() {

  const [selectedDate, setSelectedDate] = useState(null)
  const [firstname, setFirstname] = useState('')
  const [secondname, setSecondname] = useState('')
  const [patronymic, setPatronymic] = useState('')
  const [address, setAddress] = useState('')
  const [telephone, setTelephone] = useState('')



  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        await axios.post('http://localhost:8080/getinfo/pt/app/', {
          firstname,
          secondname,
          patronymic,
          address,
          selectedDate,
          telephone
      });
        toast.success('Заявка успешно создана', {
          draggable: true,
          position: toast.POSITION.TOP_RIGHT
        })

    }
    catch (e) {
      console.log(e.message)
      if(e.message === 'Request failed with status code 409'){
        toast.error('Такой пользователь уже существует', {
          className:css({
            background: "#00FF00 !important",
            color: "yellow !important",
            fontWeight: "bold"
          }),
          draggable: true,
          position: toast.POSITION.TOP_RIGHT
        })
      }
      else{
        toast.error('Ошибка соединения', {
          className:css({
            background: "#00FF00 !important",
            color: "yellow !important",
            fontWeight: "bold"
          }),
          draggable: true,
          position: toast.POSITION.TOP_RIGHT
        })
      }

    }

  }


  return(
      <div className="appClass">
        <div className="applicationForm">

          <form onSubmit={handleSubmit} className="appForm">
            <h3>Оставьте заявку и мы с вами свяжемся</h3>
            <label className="label">Имя</label>
            <input className="input"
                   type="text"
                   name="secondname"
                   value={firstname}
                   onChange={e=>setFirstname(e.target.value)}
                   required
            />
            <label className="label">Фамилия</label>
            <input className="input"
                   type="text"
                   name="secondname"
                   value={secondname}
                   onChange={e=>setSecondname(e.target.value)}
                   required
            />
            <label className="label">Отчество</label>
            <input className="input"
                   type="text"
                   name="patronymic"
                   value={patronymic}
                   onChange={e=>setPatronymic(e.target.value)}
                   required
            />
            <label className="label">Адрес</label>
            <input className="input"
                   type="text"
                   name="clientaddress"
                   value={address}
                   onChange={e=>setAddress(e.target.value)}
                   required
            />
            <label className="label">Дата рождения</label>
            <Flatpickr
                placeholder=""
                className="input"
                selected={selectedDate}
                onChange={date=>setSelectedDate(date)}
                required
            />
            <label className="label">Контактный телефон</label>
            <input className="input"
                   type="text"
                   name="telephone"
                   value={telephone}
                   onChange={e=>setTelephone(e.target.value)}
                   required
            />

            <div>
              <input className="submitButton"
                     type="submit"
                     value="Отправить"
              />
            </div>
          </form>
        </div>
      </div>
  )
}
