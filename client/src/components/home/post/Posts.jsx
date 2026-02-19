import { useEffect, useState } from 'react';

import { Grid, Box, Typography, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { API } from '../../../service/api';
import Post from './Post';

const EmptyState = styled(Box)`
    width: 100%;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    text-align: center;
`;

const EmptyIcon = styled(Box)`
    font-size: 56px;
    line-height: 1;
    filter: grayscale(0.3);
`;

const EmptyTitle = styled(Typography)`
    font-size: 20px;
    font-weight: 700;
    font-family: 'Space Grotesk', sans-serif;
    color: #334155;
`;

const EmptySubtext = styled(Typography)`
    font-size: 14px;
    color: #1e293b;
    max-width: 320px;
    line-height: 1.6;
`;

const PostsWrapper = styled(Box)`
    width: 100%;
    padding: 16px 8px;
`;

const Posts = () => {
    const [posts, getPosts] = useState([]);
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getAllPosts({ category: category || '' });
            if (response.isSuccess) {
                getPosts(response.data);
            }
        };
        fetchData();
    }, [category]);

    return (
        <PostsWrapper>
            {posts?.length ? (
                <Grid container>
                    {posts.map(post => (
                        <Grid item lg={4} sm={6} xs={12} key={post._id}>
                            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`details/${post._id}`}>
                                <Post post={post} />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <EmptyState>
                    <EmptyIcon>🎨</EmptyIcon>
                    <EmptyTitle>No ideas yet in this space</EmptyTitle>
                    <EmptySubtext>
                        Be the first to drop a creative idea in this category and inspire the world!
                    </EmptySubtext>
                </EmptyState>
            )}
        </PostsWrapper>
    );
};

export default Posts;