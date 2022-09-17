function Saudacao( {nome2} ) {

    function gerarSaudacao(algumNome){
        return(
            `Olá, ${algumNome}. Bem vindo!`
        )
    }

    return(
        <>
            {nome2 && <p>{gerarSaudacao(nome2)}</p>}
        </>
        
    )

}

export default Saudacao