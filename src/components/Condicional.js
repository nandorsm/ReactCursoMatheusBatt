import { useState } from 'react'
function Condicional(){

    const [user, setUser] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(user)
    }

    function limparEmail (){
        setUserEmail('')
    }

    return(
        <div>
            <form>
                <input type="email" 
                placeholder='Digite seu e-mail'
                onChange={(e)=>{setUser(e.target.value)}}
                />
                <button onClick={enviarEmail}>Enviar e-mail</button>
            </form>
            {userEmail &&
                <>
                    <h3>Email Correto!</h3>
                    <p>{userEmail}</p>
                    <button onClick={limparEmail}>Limpar Email</button>
                </>
            }
        </div>

    )
}

export default Condicional