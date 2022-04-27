import './admin-panel-auth.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {css} from "glamor";


toast.configure()
export default function AdminPanelAuth() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/admin/logIn", { username, password });
      setUser(res.data);
      //localStorage.setItem("token", res.data.token);
      navigate('/admin-panel')
    } catch (err) {
      if(err.message==='Request failed with status code 404'){
        toast.error('Пользователь не найден', {
          className:css({
            background: "#00FF00 !important",
            color: "yellow !important",
            fontWeight: "bold"
          }),
          draggable: true,
          position: toast.POSITION.TOP_RIGHT
        })
      }
      else if(err.message==='Request failed with status code 409'){
        toast.error('Неправильный пароль', {
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
        toast.error('Ошбика соединения', {
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
  };


  return (
        <div>
          <form onSubmit={handleSubmit} className="authForm">
            <h3>Login Here</h3>
            <label className="username">Пользователь</label>
            <input
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                required
            />
            <label className="password">Пароль</label>
            <input id="password"
                 type="password"
                 name="password"
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                 required
            />
            <div>
              <input
                     type="submit"
                     value="Войти"
              />
            </div>

          </form>
        </div>
  )
}

