import React from 'react';

const SideNav = ({ ser }) => {
    const { serviceName } = ser;
    return (
        <button className="btn btn-outline btn-primary lg:w-48 mx-auto my-0">{serviceName}</button>
    );
};

export default SideNav;