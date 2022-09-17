import { useState } from 'react'


function Form() {
    
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(name)
        console.log(password)
        console.log(`O Usuário: ${name} foi cadastrado com a Senha: ${password}`)
    }
    //OU
    // const cadastrarUsuario = (e) =>{
    //     e.preventDefault()
    //     console.log("Cadastrou o Usuário!")
    // }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Digite o seu Nome"
                        //value={name}
                        onChange={(e) => setName(e.target.value)}
                        //Sem ArrowFunction{function(e){setName(e.target.value)}}
                        
                        />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Digite sua Senha"
                        onChange={(evento) => setPassword(evento.target.value)}
                        />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form