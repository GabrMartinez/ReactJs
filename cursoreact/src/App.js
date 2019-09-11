import React , {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Contador from "./Contador";
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
            texto: "Lorem Ipsum",
            contador: 0
        }
        this.cambiarTexto = this.cambiarTexto.bind(this);
        this.aumentarContador = this.aumentarContador.bind(this);
    }

    cambiarTexto() {
        this.setState({ texto : "Ipsum Lorem" });
    }


    aumentarContador(){
        this.setState({ contador: this.contador ++})
    }

    render () {
        let {links, contador} = this.state
        return (
            <>
                <Header links={links}/>
                <Main/>
                <Contador contador={contador} funcion={this.aumentarContador}/>
                <Footer/>
            </>
        );}
}


export default App;