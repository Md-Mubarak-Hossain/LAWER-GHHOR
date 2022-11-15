import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Footer from '../../Home/Chat/Footer';

const LegalNotice = () => {
    useTitle('Legal Notice');
    return (
        <>
            <div className="card w-11/12  shadow-xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                <div className="card-body border p-2">
                    <h2 className="card-title">Why is it important to obtain a Succession Certificate?</h2>
                    <p>Succession certificate entitles the holder to make payment of debt or transfer securities to the holder of certificate without having to ascertain the legal heir entitled to it. It provides indemnity to all persons owing such debts or liable on such securities with regards to all payments made to or dealings had in good faith with a person to whom a certificate as granted. Hence, many organisations and person request for succession certificate before settling the debts or securities of the deceased in favour of the person claiming such debts or securities.</p>
                </div>
                <div className="card-body border p-2">
                    <h2 className="card-title">What is the procedure for obtaining the succession certificate?</h2>
                    <p>To obtain succession certificate, a petition has to be filed before the District Judge within whose jurisdiction the deceased person ordinarily resided at the time of his or her death or, if at that time he or she had no fixed place of residence, the District Judge within whose jurisdiction any part of the property of the deceased may be found.</p>
                </div>
            </div>
            <div className="grid  card  rounded-box place-items-center"><Footer></Footer></div>
        </>
    );
};

export default LegalNotice;