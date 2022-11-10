import React from 'react';

const NoData = () => {
    return (
        <div className="card w-11/12  shadow-xl mx-auto">
            <div className="card-body text-center">
                <p>Ops!!!</p>
                <h2>No Data Here</h2>
                <p>You have not select any review service item.</p>
            </div>
        </div >
    );
};

export default NoData;