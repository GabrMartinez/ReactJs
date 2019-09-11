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
    render () {
        return (
            <>
                <Header/>
                <Main/>
                <Footer/>
            </>
        );}
}


export default App;