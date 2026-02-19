import { useState, useEffect, useContext } from 'react';
import { Box, Button, Typography, styled } from '@mui/material';

import { DataContext } from '../../../context/DataProvider';
import { API } from '../../../service/api';
import Comment from './Comment';

const Section = styled(Box)`
    margin-top: 0;
`;

const SectionHeader = styled(Typography)`
    font-size: 16px;
    font-weight: 700;
    font-family: 'Space Grotesk', sans-serif;
    color: #f1f5f9;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 8px;

    span {
        font-size: 12px;
        font-weight: 600;
        color: #d946ef;
        background: rgba(217, 70, 239, 0.1);
        padding: 2px 10px;
        border-radius: 99px;
        border: 1px solid rgba(217, 70, 239, 0.2);
    }
`;

const ComposerBox = styled(Box)`
    display: flex;
    gap: 14px;
    align-items: flex-start;
    margin-bottom: 28px;
    padding: 20px;
    background: rgba(15, 22, 35, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 14px;
    backdrop-filter: blur(12px);
    transition: border-color 0.25s ease;

    &:focus-within {
        border-color: rgba(217, 70, 239, 0.3);
        box-shadow: 0 0 0 3px rgba(217, 70, 239, 0.06);
    }
`;

const AvatarCircle = styled(Box)`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: linear-gradient(135deg, #d946ef, #7c3aed);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    font-family: 'Space Grotesk', sans-serif;
    flex-shrink: 0;
    margin-top: 2px;
`;

const TextareaWrapper = styled(Box)`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const StyledTextarea = styled('textarea')`
    width: 100%;
    min-height: 80px;
    background: transparent;
    border: none;
    outline: none;
    resize: none;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    color: #94a3b8;
    line-height: 1.6;
    placeholder-color: #1e293b;

    &::placeholder {
        color: #334155;
    }
`;

const PostButton = styled(Button)`
    align-self: flex-end;
    background: linear-gradient(135deg, #d946ef 0%, #7c3aed 100%);
    color: #fff;
    font-weight: 700;
    font-size: 12px;
    padding: 8px 20px;
    border-radius: 8px;
    text-transform: none;
    font-family: 'Inter', sans-serif;
    box-shadow: 0 4px 14px rgba(217, 70, 239, 0.25);
    transition: all 0.25s ease;

    &:hover {
        box-shadow: 0 6px 20px rgba(217, 70, 239, 0.4);
        filter: brightness(1.08);
        transform: translateY(-1px);
    }
`;

const CommentsListWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
`;

const EmptyComments = styled(Box)`
    text-align: center;
    padding: 32px 0;
    color: #1e293b;
    font-size: 14px;
`;

const initialValue = {
    name: '',
    postId: '',
    date: new Date(),
    comments: ''
};

const Comments = ({ post }) => {
    const [comment, setComment] = useState(initialValue);
    const [comments, setComments] = useState([]);
    const [toggle, setToggle] = useState(false);

    const { account } = useContext(DataContext);

    useEffect(() => {
        const getData = async () => {
            const response = await API.getAllComments(post._id);
            if (response.isSuccess) {
                setComments(response.data);
            }
        };
        getData();
    }, [toggle, post]);

    const handleChange = (e) => {
        setComment({
            ...comment,
            name: account.username,
            postId: post._id,
            comments: e.target.value
        });
    };

    const addComment = async () => {
        await API.newComment(comment);
        setComment(initialValue);
        setToggle(prev => !prev);
    };

    const initials = (account.username || 'U').charAt(0).toUpperCase();

    return (
        <Section>
            <SectionHeader>
                Comments
                {comments.length > 0 && <span>{comments.length}</span>}
            </SectionHeader>

            <ComposerBox>
                <AvatarCircle>{initials}</AvatarCircle>
                <TextareaWrapper>
                    <StyledTextarea
                        placeholder="Share your thoughts on this idea..."
                        onChange={handleChange}
                        value={comment.comments}
                    />
                    <PostButton onClick={addComment}>
                        Post Comment
                    </PostButton>
                </TextareaWrapper>
            </ComposerBox>

            <CommentsListWrapper>
                {comments && comments.length > 0 ? (
                    comments.map(c => (
                        <Comment key={c._id} comment={c} setToggle={setToggle} />
                    ))
                ) : (
                    <EmptyComments>No comments yet — be the first to share your thoughts!</EmptyComments>
                )}
            </CommentsListWrapper>
        </Section>
    );
};

export default Comments;