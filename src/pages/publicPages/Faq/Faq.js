import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/Context';
import { useLoaderData } from 'react-router-dom';
import FaqDetail from './FaqDetail';
import useTitle from '../../../hooks/useTitle';


const Faq = () => {
    useTitle('FAQ');
    const faq = useLoaderData();
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <p>loading...</p>
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