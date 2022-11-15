
import React, { useContext } from 'react';
import { ExternalLink } from 'react-external-link';
import YouTube from 'react-youtube';
import { AuthContext } from '../../../Contexts/Context';
const Singl = ({ chat }) => {
    const { user } = useContext(AuthContext)
    const opts = {
        height: '150',
        width: '240',
        autoplay: 1
    }
    return (
        <div>
            {
                user?.email === chat?.email ?
                    <div className='flex justify-between'>
                        <div className='w-10/12 p-5'>
                            {
                                chat.chats.includes('https://www.youtube.com/watch?v=') || chat.chats.includes('https://') ?
                                    <>
                                        {
                                            chat.chats.includes('https://www.youtube.com/watch?v=') ?
                                                <YouTube videoId="2g811Eo7K8U" opts={opts} playerVars={chat.chats} controls />

                                                : <p className='bg-primary text-white rounded p-3'>
                                                    <ExternalLink href={chat.chats}>
                                                    </ExternalLink>
                                                </p>
                                        }
                                    </>
                                    : <p className='text-white bg-primary rounded p-3'>{chat.chats}</p>
                            }
                        </div>
                        <div className='w-2/12 py-5 px-3'>
                            <img src={chat?.photo} className='h-5 w-5 rounded-full' alt='.' title={chat.displayName} />
                        </div>
                    </div >
                    : <div className='flex flex-row-reverse justify-between'>
                        <div className='w-10/12 p-5'>
                            {
                                chat.chats.includes('https://www.youtube.com/watch?v=') || chat.chats.includes('youtu') || chat.chats.includes('https://') ?
                                    <>
                                        {
                                            chat.chats.includes('https://www.youtube.com/watch?v=') || chat.chats.includes('youtu') ?
                                                <YouTube videoId="2g811Eo7K8U" opts={opts} playerVars={chat.chats} controls />

                                                : <p className='text-black bg-gray-100 rounded p-3'>
                                                    <ExternalLink href={chat.chats}>
                                                    </ExternalLink>
                                                </p>
                                        }
                                    </>
                                    : <p className='text-black bg-gray-100 rounded p-3'>{chat.chats}</p>
                            }
                        </div>
                        <div className='w-2/12 place-items-center py-5 px-3'>
                            <img src={chat?.photo} className='h-5 w-5 rounded-full' alt='.' title={chat.displayName} />
                        </div>
                    </div >
            }
        </div >
    );
};


export default Singl;