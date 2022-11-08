import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/Context';
import Load from '../../Shared/Load/Load';
import { useLoaderData } from 'react-router-dom';
import FaqDetail from './FaqDetail';


const Faq = () => {
    const faq = useLoaderData();
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <Load></Load>
    }
    return (
        <div className='p-2 grid grid-cols-1 lg:grid-cols-3'>
            {
                faq.map(f => <FaqDetail key={f.index}
                    f={f}>
                </FaqDetail>)
            }
        </div >
    );
};

export default Faq;