import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Context';
import useTitle from '../../../hooks/useTitle';
import BlogDetail from './BlogDetail';

const Blog = () => {
    useTitle('Blog');
    const blog = useLoaderData();
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <p>loading...</p>
    }
    return (
        <>
            <div className='p-2'>
                {
                    blog.map(b => <BlogDetail key={b.index}
                        b={b}></BlogDetail>)
                }
            </div >
        </>
    );
};

export default Blog;