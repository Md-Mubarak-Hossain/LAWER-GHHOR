import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Context';
import useTitle from '../../../hooks/useTitle';
import Load from '../../Shared/Load/Load';
import Slider from '../../Shared/Slider/Slider';
import BlogDetail from './BlogDetail';

const Blog = () => {
    useTitle('Blog');
    const blog = useLoaderData();
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <Load></Load>
    }
    return (
        <>
            <Slider></Slider>
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