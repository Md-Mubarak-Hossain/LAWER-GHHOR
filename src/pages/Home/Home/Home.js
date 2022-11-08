import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/Context';


const Home = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <h2>loading...</h2>
    }
    console.log(loading)
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
};

export default Home;