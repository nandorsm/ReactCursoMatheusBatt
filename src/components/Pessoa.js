function Pessoa({foto, nome, idade, profissao}){ //no lugar de usar o props pode-se dizer o nome das variáveis(chama-se structures)
    return (
        <div>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa