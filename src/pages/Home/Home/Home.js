import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/Context';
import useTitle from '../../../hooks/useTitle';
import Load from '../../Shared/Load/Load';

const Home = () => {
    useTitle('Home');
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <Load></Load>
    }
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
};
export default Home;