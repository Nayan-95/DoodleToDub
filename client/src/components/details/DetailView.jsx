import { useState, useEffect, useContext } from 'react';

import { Box, Typography, Chip, styled } from '@mui/material';
import { Delete, Edit, CalendarToday, Person } from '@mui/icons-material';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import Comments from './comments/Comments';

const PageWrapper = styled(Box)(({ theme }) => ({
    maxWidth: 860,
    margin: '40px auto',
    padding: '0 24px 60px',
    [theme.breakpoints.down('md')]: {
        margin: '16px auto',
        padding: '0 16px 40px',
    },
}));

const HeroImage = styled('img')`
    width: 100%;
    height: 440px;
    object-fit: cover;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.6);
`;

const ArticleHeader = styled(Box)`
    margin-top: 36px;
`;

const CategoryBadge = styled(Chip)`
    background: rgba(217, 70, 239, 0.12);
    color: #d946ef;
    border: 1px solid rgba(217, 70, 239, 0.25);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    height: 28px;
    margin-bottom: 16px;
`;

const Title = styled(Typography)`
    font-family: 'Space Grotesk', 'Inter', sans-serif;
    font-size: clamp(1.75rem, 4vw, 2.6rem);
    font-weight: 800;
    color: #f1f5f9;
    line-height: 1.2;
    letter-spacing: -0.5px;
    margin-bottom: 24px;
`;

const Meta = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    padding: 16px 20px;
    background: rgba(15, 22, 35, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    margin-bottom: 32px;
`;

const MetaItem = styled(Box)`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: #64748b;

    a {
        text-decoration: none;
        color: #d946ef;
        font-weight: 600;
        &:hover { text-decoration: underline; }
    }
`;

const ActionButtons = styled(Box)`
    display: flex;
    gap: 8px;
`;

const ActionBtn = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.04);

    &.edit:hover {
        background: rgba(139, 92, 246, 0.15);
        border-color: rgba(139, 92, 246, 0.4);
        color: #a78bfa;
    }
    &.delete:hover {
        background: rgba(244, 63, 94, 0.12);
        border-color: rgba(244, 63, 94, 0.35);
        color: #f43f5e;
    }
`;

const Divider = styled(Box)`
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(217, 70, 239, 0.2), transparent);
    margin: 32px 0;
`;

const Body = styled(Typography)`
    font-size: 16px;
    line-height: 1.85;
    color: #94a3b8;
    white-space: pre-wrap;
    letter-spacing: 0.2px;
`;

const DetailView = () => {
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    const [post, setPost] = useState({});
    const { account } = useContext(DataContext);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data);
            }
        };
        fetchData();
    }, []);

    const deleteBlog = async () => {
        await API.deletePost(post._id);
        navigate('/');
    };

    return (
        <PageWrapper>
            <HeroImage src={post.picture || url} alt="post" />

            <ArticleHeader>
                {post.categories && <CategoryBadge label={post.categories} size="small" />}
                <Title>{post.title}</Title>

                <Meta>
                    <Box style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                        <MetaItem>
                            <Person style={{ fontSize: 16, color: '#d946ef' }} />
                            <Link to={`/?username=${post.username}`}>@{post.username}</Link>
                        </MetaItem>
                        <MetaItem>
                            <CalendarToday style={{ fontSize: 14 }} />
                            {new Date(post.createdDate).toDateString()}
                        </MetaItem>
                    </Box>

                    {account.username === post.username && (
                        <ActionButtons>
                            <Link to={`/update/${post._id}`}>
                                <ActionBtn className="edit">
                                    <Edit style={{ fontSize: 16, color: '#94a3b8' }} />
                                </ActionBtn>
                            </Link>
                            <ActionBtn className="delete" onClick={deleteBlog}>
                                <Delete style={{ fontSize: 16, color: '#94a3b8' }} />
                            </ActionBtn>
                        </ActionButtons>
                    )}
                </Meta>

                <Body>{post.description}</Body>
            </ArticleHeader>

            <Divider />
            <Comments post={post} />
        </PageWrapper>
    );
};

export default DetailView;