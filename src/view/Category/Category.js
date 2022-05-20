import { useParams } from "react-router-dom";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

export default function Category(){
    const {categoryId} = useParams()
    console.log(categoryId)
    return(
        <div>
            <h1>Listado de Productos</h1>
            <ItemListContainer categoryId = {categoryId}/>
        </div>

    );

}