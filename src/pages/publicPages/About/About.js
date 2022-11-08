import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/Context';
import Load from '../../Shared/Load/Load';

const About = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <Load></Load>
    }
    return (
        <div>
            <h2>about</h2>
        </div>
    );
};

export default About;