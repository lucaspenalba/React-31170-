import { useParams } from "react-router-dom";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Header from "../../components/Navbar/Navbar";

export default function Category(){
    const {catedoryId} = useParams();
    return(
        <div>
            <Header/>
            <h1>Listado de Productos</h1>
            <ItemListContainer/>
        </div>

    );

}