import './admin-panel-auth.css'
import {useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";

export default function AdminPanelAuth() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const useNavigate = useNavigate()
  async function loginUser(event) {
    event.PreventDefault()

    const response = await fetch('http://localhost:8080/api/admin/logIn',{
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })

    const data = await response.json()

    if(data.user){
      return true
    }else{
      console.log('Wrong username or password')
      return false
    }
  }


  return (
        <div>
          <form>
            <div className="usernameLabel">Пользователь</div>
            <input
                className="usernameInput"
                type="text"
                name="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <div className="passwordLabel">Пароль</div>
            <input className="passwordInput"
                   type="password"
                   name="password"
                   value={password}
                   onChange={e => setPassword(e.target.value)}
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

