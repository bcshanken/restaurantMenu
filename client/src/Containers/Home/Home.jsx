import React from 'react';
import Nav from '../../Components/Navbar/Nav';

const Home = (props) => {
    return (
        <>
        <Nav/>
        <div className="container center">
            <h1>Welcome to Poseidon's Catch</h1>
            <h3>Press 'Menu" to get started.</h3>
        </div>
        </>
    );
}

export default Home;