import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Uploader } from 'uploader';
import { AuthContext } from '../../../Contexts/Context';

const File = () => {
    const fileData = useLoaderData()
    console.log(fileData, fileData.length)
    const { loading } = useContext(AuthContext);
    const [files, setFiles] = useState()
    const uploader = Uploader({
        apiKey: "free"
    });
    const uploadImage = () => {
        uploader
            .open({
                maxFileCount: 1,
                mimeTypes: ["image/jpeg", "image/png", "image/webp"],
            })
            .then(res => res.json())
            .then(files => setFiles(files));
    }


    /*.....post file......*/
    const handleSub = event => {
        event.preventDefault();
        event.target.reset();
        fetch('https://lawyer-server-10.vercel.app/files', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(files)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    if (loading) {
        return <><p> page ready</p><p>loading...</p></>
    }
    return (
        <>
            <div>
                {fileData.length > 0 ?
                    fileData.map(f => <p key={f._id}>{f.file}{f._id}</p>)
                    : <></>
                }
            </div>
            <form onSubmit={handleSub}>
                <button onClick={uploadImage} className='btn btn-ghost rounded-full '>Upload</button>
            </form >
        </>
    );
};

export default File;