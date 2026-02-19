import { styled, Box, Typography } from '@mui/material';

const Card = styled(Box)`
    position: relative;
    background: rgba(15, 22, 35, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    margin: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 360px;
    cursor: pointer;
    backdrop-filter: blur(12px);
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: translateY(-6px);
        border-color: rgba(217, 70, 239, 0.35);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(217, 70, 239, 0.12);
    }

    &:hover .card-image {
        transform: scale(1.06);
    }

    &:hover .card-overlay {
        opacity: 1;
    }
`;

const ImageWrapper = styled(Box)`
    position: relative;
    height: 180px;
    overflow: hidden;
    flex-shrink: 0;
`;

const Image = styled('img')`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

const ImageOverlay = styled(Box)`
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to bottom,
        transparent 40%,
        rgba(8, 11, 18, 0.8) 100%
    );
    opacity: 0;
    transition: opacity 0.35s ease;
`;

const CategoryBadge = styled(Box)`
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 4px 10px;
    background: rgba(217, 70, 239, 0.85);
    backdrop-filter: blur(8px);
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-radius: 99px;
    border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Content = styled(Box)`
    padding: 16px 18px 18px;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 8px;
`;

const Title = styled(Typography)`
    font-size: 16px;
    font-weight: 700;
    font-family: 'Space Grotesk', 'Inter', sans-serif;
    color: #f1f5f9;
    line-height: 1.35;
    letter-spacing: -0.3px;
`;

const Author = styled(Typography)`
    font-size: 11px;
    font-weight: 500;
    color: #64748b;
    letter-spacing: 0.3px;
    text-transform: uppercase;

    span {
        color: #d946ef;
        font-weight: 600;
    }
`;

const Description = styled(Typography)`
    font-size: 13px;
    color: #475569;
    line-height: 1.6;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const ReadMore = styled(Box)`
    font-size: 12px;
    font-weight: 600;
    color: #d946ef;
    letter-spacing: 0.3px;
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 4px;

    &::after {
        content: '→';
        transition: transform 0.2s ease;
    }
`;

const Post = ({ post }) => {
    const url = post.picture
        ? post.picture
        : 'https://www.shutterstock.com/image-vector/two-hands-connection-pop-art-600w-2333739163.jpg';

    const addEllipsis = (str, limit) =>
        str.length > limit ? str.substring(0, limit) + '...' : str;

    return (
        <Card>
            <ImageWrapper>
                <Image className="card-image" src={url} alt="post" />
                <ImageOverlay className="card-overlay" />
                {post.categories && (
                    <CategoryBadge>{post.categories}</CategoryBadge>
                )}
            </ImageWrapper>
            <Content>
                <Title>{addEllipsis(post.title, 52)}</Title>
                <Author>
                    by <span>@{post.username}</span>
                </Author>
                <Description>{addEllipsis(post.description, 110)}</Description>
                <ReadMore>Read idea</ReadMore>
            </Content>
        </Card>
    );
};

export default Post;