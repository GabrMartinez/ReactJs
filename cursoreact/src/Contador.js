import React from "react";

class Contador extends React.Component {
    render () {
    let {contador} = this.props;
    let {aumentarContador} = this.props;
    return (
        <>
        <h1>{contador}</h1>
        <button onClick={ aumentarContador }>Contador</button>
        </>
    )};
}

export default Contador;