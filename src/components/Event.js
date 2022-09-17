function Event({ numero }){

    function meuEvento(){
        console.log(`Opa, Fui CLicaaado!${numero}`)
    }

    return( 
        <>
            <input type="submit" value="Click Aqui!" onClick={meuEvento}/>
        </>
    )
}

export default Event