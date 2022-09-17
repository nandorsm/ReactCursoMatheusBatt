function OutraLista({ itens }){
    return(
        <>
            <h2>Minha Array List</h2>
            {itens.length > 0 ? (
            itens.map((item) => <p>{item}</p>)
            ) : (
                <p>Não há itens na lista!</p>
            )}
        </>
        

    )
}

export default OutraLista