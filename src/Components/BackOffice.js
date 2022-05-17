import {useState} from 'react'
import axios from 'axios'

import AddSituation from './AddSituation';

function BackOffice(){

    const [isLogged, setIsLogged] = useState(false);
    const [error, setError] = useState(false)


    const handleLogin = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://localhost:8080/api/user/checkUser',
            data: {
                username: e.target.username.value,
                password: e.target.password.value
            },
            headers: {
                "Content-Type": "application/json",
            }
        }).then((data) => {
            if(data.data){
                setIsLogged(true)
            }else{
                setError(true)
                console.log(data.data)
            }
        })
    }

    if(!isLogged){
        return(
            <div className="backoffice-non-logged-container">

                <form onSubmit={(e) => handleLogin(e)} action="">
                    <input name='username' type="text" placeholder='Identifiant'/>
                    <input name='password' type="password" placeholder='Mot de passe'/>
                    <input type="submit" value="S'identifier"/>
                </form>
                {error? <div className='error-login-container'>Identifiant ou mot de passe incorrect</div>: ""}
            </div>
        )
    }else{
        return(
            <div className="backoffice-container">
                <div className="add-situation-container">
                    <AddSituation />
                </div>
            </div>
        )
    }

    
}

export default BackOffice;