import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Context';
import Load from '../../Shared/Load/Load';
import BlogDetail from './BlogDetail';

const Blog = () => {
    const blog = useLoaderData();
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <Load></Load>
    }
    return (
        <div className='p-2'>
            {
                blog.map(b => <BlogDetail key={b.index}
                    b={b}></BlogDetail>)
            }
        </div >
    );
};

export default Blog;