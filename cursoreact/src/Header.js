import React from "react";

class Header extends React.Component {
    render () {
    let {links} = this.props
    return (
    <>
        <h1>Header</h1>
        <nav>
            { links.map(link => <a href="#"> {link} </a>) }
        </nav>
    </>
    )};
}

export default Header;