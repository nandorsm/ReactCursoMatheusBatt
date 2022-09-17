function SeuNome({ setandoNome2 }){

    return(
        <div>
            <p>Digite seu nome: </p>
            <input type="text" placeholder="Qual seu nome?" 
            onChange={(e) => setandoNome2(e.target.value)}/>
        </div>
    )
}

export default SeuNome 