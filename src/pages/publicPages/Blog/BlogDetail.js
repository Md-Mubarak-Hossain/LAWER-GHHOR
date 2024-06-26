import React, { createRef } from 'react';
import Pdf from "react-to-pdf";
import { FcDownload } from 'react-icons/fc';
const ref = createRef();
const BlogDetail = ({ b }) => {
    const { title, description } = b;
    return (
        <div className='mx-auto w-11/12 m-5 p-4 rounded ' ref={ref}>
            <h3 className='text-primary text-extrabold text-4xl p-2 m-2'>{title}</h3>

            <p className="p-4 text-semibold   my-2 rounded text-xl text-justify">
                {description}
            </p>
            <Pdf targetRef={ref} filename='cors.pdf'>
                {({ toPdf }) => <button className='badge badge-outline  btn-outline btn-warning w-40 p-3' onClick={toPdf}><FcDownload></FcDownload>Download</button>}
            </Pdf>
        </div>
    );
};

export default BlogDetail;