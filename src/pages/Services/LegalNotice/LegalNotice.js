import React from 'react';
import useTitle from '../../../hooks/useTitle';
import notice from "../../../images/notice.png"
import { Link } from 'react-router-dom';
const LegalNotice = () => {
    useTitle('Legal Notice');
    return (
        <div className='p-5'>
            <div className="w-11/12  bg-base-100-xl mx-auto">
            <div className='max-h-20'>
                <img src={notice} alt='notice' className='bg-blue-500 max-h-20' />
            </div>
                <div className="py-5">
                    <h2 className=" text-blue-800">Why is it important to obtain a Succession Certificate?</h2>
                    <p>Succession certificate entitles the holder to make payment of debt or transfer securities to the holder of certificate without having to ascertain the legal heir entitled to it. It provides indemnity to all persons owing such debts or liable on such securities with regards to all payments made to or dealings had in good faith with a person to whom a certificate as granted. Hence, many organizations and person request for succession certificate before settling the debts or securities of the deceased in favour of the person claiming such debts or securities.</p>
                </div>
                <div className="py-5">
                    <h2 className="text-blue-800">What is the procedure for obtaining the succession certificate?</h2>
                    <p>To obtain succession certificate, a petition has to be filed before the District Judge within whose jurisdiction the deceased person ordinarily resided at the time of his or her death or, if at that time he or she had no fixed place of residence, the District Judge within whose jurisdiction any part of the property of the deceased may be found.</p>
                </div>
                <div>
                    <Link>See more</Link>
                </div>
            </div>
        </div>
    );
};

export default LegalNotice;