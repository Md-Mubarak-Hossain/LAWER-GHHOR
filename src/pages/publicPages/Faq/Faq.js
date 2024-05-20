import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/Context';
import { useLoaderData } from 'react-router-dom';
import FaqDetail from './FaqDetail';
import useTitle from '../../../hooks/useTitle';
import faqLawyer from "../../../images/lawyer1png.png"
import faqQuestion from "../../../images/question.png"

const Faq = () => {
    useTitle('FAQ');
    const faq = useLoaderData();
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <p>loading...</p>
    }
    return (
        <div className='w-11/12 flex flex-col justify-center items-center mx-auto'>
<div className='flex'>
<img src={faqLawyer} alt="faqImg" />
<img src={faqQuestion} alt="faqImg2" />
</div>
<div className='p-2 grid grid-cols-1 mdgrid-cols-2 bg-base-200'>
            {
                faq.map(f => <FaqDetail key={f.index}
                    f={f}>
                </FaqDetail>)
            }
        </div >
        </div>
    );
};

export default Faq;