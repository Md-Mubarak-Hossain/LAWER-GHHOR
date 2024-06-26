import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/Context';
import useTitle from '../../../hooks/useTitle';
import ChatView from './ChatView';
import Foot from './Foot';
import Load from '../../Shared/Load/Load';



const Chat = () => {
    useTitle('Me Chat');
    const { user, loading } = useContext(AuthContext);
    console.log(user)
    const [users, setUsers] = useState()
    const onBlurHandle = event => {
        const value = event.target.value;
        const field = event.target.name;
        const photo = user.photoURL;
        console.log(photo)
        const newUser = { ...users, photo: photo, email: user.email }
        newUser[field] = value;
        setUsers(newUser);
        console.log(newUser)
    }
    const handleSub = event => {
        event.preventDefault();
        event.target.reset();
        fetch('https://lawyer-server-10.vercel.app/mchats', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remain = users.filter(usr => usr._id === users.chat._id)
                setUsers(remain)
            })
    }
    if (loading) {
        return <><Load/></>
    }
    return (
<>
<div className="flex flex-col w-full px-5">
            <div className=" h-20  place-items-center shadow-xl">
                <p className='flex  pt-3'>
                    {
                        <div className='grid grid-cols-1'>
                            <img className='w-10 h-10 text-sm rounded-full' src={`${user.photoURL}`} alt='img' />
                            <p className='text-xs'>{user.displayName?.slice(0, 10)}</p>
                        </div>
                    }
                </p>
            </div>
            <div className="w-full mx-auto mdw-4/5 grid h-96  bg-base-300 place-items-center   overflow-y-scroll" enabled={true} top={500} bottom={0}>
                <ChatView></ChatView>
            </div>
        </div>
            <div className="inline-flex mdflex-row-reverse justify-between mx-auto bg-base-200 text-blue-700 w-full">
                <form onSubmit={handleSub} className="flex h-20  place-items-center justify-end">

                    <p className='pl-2 '><textarea onBlur={onBlurHandle} name="chats" type="text" placeholder="Type here" className="textarea input-bordered rounded-xl h-1 w-56 mdw-96" >
                    </textarea></p> 
                    <p className='pr-2'><button className="btn btn-outline btn-slate-50 border-slate-50 border-0 hover:border">send
                    </button></p>
                </form>
                <div className="h-20 flex justify-start">
                    <Foot></Foot>
                </div>
            </div>
</>

    );
};

export default Chat;