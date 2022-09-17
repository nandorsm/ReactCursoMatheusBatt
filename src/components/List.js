import styles from "./List.module.css";
import Item from "./Item";
import Event from "./Event";
import Form from "./Form";

function List(){


    return(
        <>
            <h1 className={styles.underline}>Minha Lista</h1>
            <ul className={styles.margList}>
                <li>Item 1</li>
                <li>Item 2</li>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat" ano_lancamento={1964}/>
                {/*marca está setado como obrigatório(required) em Item*/}
                <Item marca="Chevrolet" ano_lancamento={1999}/>
                <Item/> {/*se não passar os parametros, é utilizado o default */}
                <Event numero={1}/>
                <Event numero={2}/>
                <Form/>


            </ul>
        </>
    )
}

export default List