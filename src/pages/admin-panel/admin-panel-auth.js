import './admin-panel-auth.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useMessage} from "../../hooks/message.hook";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {css} from "glamor";


toast.configure()
export default function AdminPanelAuth() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate()


  /*const refreshToken = async () => {
    try {
      const res = await axios.post("/refresh", { token: user.refreshToken });
      setUser({
        ...user,
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };*/

  const axiosJWT = axios.create()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/admin/logIn", { username, password });
      setUser(res.data);
      navigate('/admin-panel')
    } catch (err) {
      if(err){
        toast.error('Wrong password or username', {
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

  /*const handleDelete = async (id) => {
    setSuccess(false);
    setError(false);
    try {
      await axiosJWT.delete("/users/" + id, {
        headers: { authorization: "Bearer " + user.accessToken },
      });
      setSuccess(true);
    } catch (err) {
      setError(true);
    }
  };*/

  return (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="usernameLabel">Пользователь</div>
            <input
                className="usernameInput"
                type="text"
                name="username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                required
            />
            <div className="passwordLabel">Пароль</div>
            <input className="passwordInput"
                 type="password"
                 name="password"
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                 required
            />
            <div>
              <input className="submitButton"
                     type="submit"
                     value="Войти"
              />
            </div>
          </form>
        </div>
  )
}

