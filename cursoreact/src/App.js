import React , {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
//Mi componente "App"
// let App = () => [
//         <p>Hola Mundo</p>, 
//         <p>Hola Mundo</p>
//     ];
    
//utilizar Fragmentos
// let App = () => 
//     <>
//         <p>Hola Mundo</p>
//         <p>Hola Mundo</p>
//     </>;

class App extends Component{
    constructor () {
        super ();
        this.state = {
            links : ["perfil","portfolio","contacto"],
            texto: "Lorem Ipsum"
        }
        this.cambiarTexto = this.cambiarTexto.bind(this);
    }

    cambiarTexto() {
        this.setState({ texto : "Ipsum Lorem" });
    }

    render () {
        let {links, texto} = this.state
        return (
            <>
                <Header links={links}/>
                <p>{ texto }</p>
                <button onClick={ this.cambiarTexto }> Click! </button>
                <Main/>
                <Footer/>
            </>
        );}
}


export default App;