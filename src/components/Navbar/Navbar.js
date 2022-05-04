export default function Navbar () {

    const headersStyle = {
        background: "#338aff",        

    }
    
    const headerStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        listStyle: "none",
    }


    return (
        <header className="header" style={headersStyle}>
            <div className="logo">Alimento de Mascotas</div>
            <ul className="Items" style={headerStyle}>
                <li>Inicio</li>
                <li>Prodcutos</li>
                <li>Categorias</li>
                <li>Perfil</li>
            </ul>
            
        </header>
    );

}