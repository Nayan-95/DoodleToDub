import { useState, useEffect, useContext } from 'react';
import { Box, Typography, styled, Avatar } from '@mui/material';
import { Delete } from '@mui/icons-material';

import { API } from '../../../service/api';
import { DataContext } from '../../../context/DataProvider';

const CommentCard = styled(Box)`
    display: flex;
    gap: 14px;
    padding: 18px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    animation: slideIn 0.3s ease both;

    @keyframes slideIn {
        from { opacity: 0; transform: translateY(8px); }
        to   { opacity: 1; transform: translateY(0); }
    }
`;

const StyledAvatar = styled(Avatar)`
    width: 38px !important;
    height: 38px !important;
    background: linear-gradient(135deg, #d946ef, #7c3aed) !important;
    font-size: 14px !important;
    font-weight: 700 !important;
    font-family: 'Space Grotesk', sans-serif !important;
    flex-shrink: 0;
`;

const CommentBody = styled(Box)`
    flex: 1;
    min-width: 0;
`;

const CommentHeader = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
`;

const MetaLeft = styled(Box)`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Name = styled(Typography)`
    font-size: 13px;
    font-weight: 700;
    color: #f1f5f9;
    font-family: 'Space Grotesk', sans-serif;
`;

const DateText = styled(Typography)`
    font-size: 11px;
    color: #334155;
`;

const DeleteBtn = styled(Box)`
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    cursor: pointer;
    color: #334155;
    transition: all 0.2s ease;
    border: 1px solid transparent;

    &:hover {
        color: #f43f5e;
        background: rgba(244, 63, 94, 0.08);
        border-color: rgba(244, 63, 94, 0.2);
    }
`;

const CommentText = styled(Typography)`
    font-size: 14px;
    color: #64748b;
    line-height: 1.65;
    word-break: break-word;
`;

const Comment = ({ comment, setToggle }) => {
    const { account } = useContext(DataContext);

    const removeComment = async () => {
        await API.deleteComment(comment._id);
        setToggle(prev => !prev);
    };

    const initials = (comment.name || 'U').charAt(0).toUpperCase();

    return (
        <CommentCard>
            <StyledAvatar>{initials}</StyledAvatar>
            <CommentBody>
                <CommentHeader>
                    <MetaLeft>
                        <Name>@{comment.name}</Name>
                        <DateText>{new Date(comment.date).toDateString()}</DateText>
                    </MetaLeft>
                    {comment.name === account.username && (
                        <DeleteBtn onClick={removeComment}>
                            <Delete style={{ fontSize: 15 }} />
                        </DeleteBtn>
                    )}
                </CommentHeader>
                <CommentText>{comment.comments}</CommentText>
            </CommentBody>
        </CommentCard>
    );
};

export default Comment;