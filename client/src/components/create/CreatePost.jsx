import React, { useState, useEffect, useContext } from 'react';

import { styled, Box, Button, InputBase } from '@mui/material';
import { ImageOutlined } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const PageWrapper = styled(Box)(({ theme }) => ({
    maxWidth: 860,
    margin: '40px auto',
    padding: '0 24px 80px',
    [theme.breakpoints.down('md')]: {
        margin: '16px auto',
        padding: '0 16px 60px',
    },
}));

const HeroImage = styled('img')`
    width: 100%;
    height: 420px;
    object-fit: cover;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.6);
`;

const ToolBar = styled(Box)`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    margin-top: 10px;
`;

const UploadLabel = styled('label')`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: rgba(217, 70, 239, 0.08);
    border: 1px solid rgba(217, 70, 239, 0.2);
    color: #d946ef;
    cursor: pointer;
    transition: all 0.25s ease;
    flex-shrink: 0;

    &:hover {
        background: rgba(217, 70, 239, 0.16);
        border-color: rgba(217, 70, 239, 0.45);
        box-shadow: 0 0 14px rgba(217, 70, 239, 0.2);
    }
`;

const TitleInput = styled(InputBase)`
    flex: 1;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Space Grotesk', 'Inter', sans-serif;
    color: #f1f5f9;
    letter-spacing: -0.5px;

    input::placeholder {
        color: #1e293b;
    }
`;

const PublishButton = styled(Button)`
    background: linear-gradient(135deg, #d946ef 0%, #7c3aed 100%);
    color: #fff;
    font-weight: 700;
    font-size: 13px;
    padding: 10px 24px;
    border-radius: 10px;
    text-transform: none;
    font-family: 'Inter', sans-serif;
    box-shadow: 0 4px 18px rgba(217, 70, 239, 0.3);
    transition: all 0.25s ease;
    flex-shrink: 0;

    &:hover {
        box-shadow: 0 8px 28px rgba(217, 70, 239, 0.45);
        filter: brightness(1.08);
        transform: translateY(-1px);
    }
`;

const StoryTextarea = styled('textarea')`
    width: 100%;
    min-height: 320px;
    background: transparent;
    border: none;
    outline: none;
    resize: none;
    font-size: 17px;
    font-family: 'Inter', sans-serif;
    line-height: 1.85;
    color: #64748b;
    margin-top: 32px;

    &::placeholder {
        color: #1e293b;
    }

    /* Box sizing fix */
    box-sizing: border-box;
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
};

const CreatePost = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const { account } = useContext(DataContext);

    const url = post.picture
        ? post.picture
        : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                const response = await API.uploadFile(data);
                post.picture = response.data;
            }
        };
        getImage();
        post.categories = location.search?.split('=')[1] || 'All';
        post.username = account.username;
    }, [file]);

    const savePost = async () => {
        await API.createPost(post);
        navigate('/');
    };

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    return (
        <PageWrapper>
            <HeroImage src={url} alt="post" />

            <ToolBar>
                <UploadLabel htmlFor="fileInput">
                    <ImageOutlined style={{ fontSize: 20 }} />
                </UploadLabel>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: 'none' }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <TitleInput
                    onChange={handleChange}
                    name="title"
                    placeholder="Your idea title..."
                    fullWidth
                />
                <PublishButton onClick={savePost} variant="contained">
                    Publish
                </PublishButton>
            </ToolBar>

            <StoryTextarea
                placeholder="Tell your story... describe your doodle idea in detail."
                name="description"
                onChange={handleChange}
            />
        </PageWrapper>
    );
};

export default CreatePost;