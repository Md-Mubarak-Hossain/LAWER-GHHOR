import React, { useState } from 'react';
import Singl from './Singl';
const ChatView = () => {
    const [mchats, setMchat] = useState([])
    fetch('https://lawyer-server-10.vercel.app/mchats', {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let result = data
            setMchat(result)

        })

    return (
        <div className='w-full lg:w-1/2 p-2'>
            {
                mchats.map(chat => <Singl key={chat._id}
                    chat={chat}></Singl>)
            }
        </div >
    );
};

export default ChatView;