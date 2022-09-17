import Frase from "./Frase"

function HelloWorld() {

    return (
        
        <div>
            <Frase/> {/*os componentes são reutilizaveis*/}
            <h1>Meu Primeiro Componente!</h1>
            <Frase/>
        </div>
    )

}

export default HelloWorld