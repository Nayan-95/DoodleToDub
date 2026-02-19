import { Button, styled, Box, Typography } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { categories } from '../../constants/data';

const Sidebar = styled(Box)`
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-height: 100%;
`;

const CreateButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 13px 20px;
    border-radius: 12px;
    text-decoration: none;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.3px;
    font-family: 'Inter', sans-serif;
    color: #fff;
    background: linear-gradient(135deg, #d946ef 0%, #7c3aed 100%);
    box-shadow: 0 4px 20px rgba(217, 70, 239, 0.3);
    border: 1px solid rgba(217, 70, 239, 0.3);
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 28px rgba(217, 70, 239, 0.45);
        filter: brightness(1.08);
    }
    &:active { transform: translateY(0); }
`;

const SectionLabel = styled(Typography)`
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #334155;
    padding: 0 4px;
    margin-top: 8px;
`;

const CategoryList = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 2px;
    background: rgba(15, 22, 35, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 14px;
    padding: 8px;
    backdrop-filter: blur(12px);
`;

const AllLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    color: #d946ef;
    text-decoration: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    margin-bottom: 4px;
    transition: all 0.2s ease;

    &:hover {
        background: rgba(217, 70, 239, 0.08);
        color: #f0abfc;
    }

    &::before {
        content: '⊞';
        font-size: 15px;
    }
`;

const CategoryLink = styled(Link, { shouldForwardProp: p => p !== 'active' })`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 14px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    color: ${p => p.active ? '#d946ef' : '#64748b'};
    background: ${p => p.active ? 'rgba(217, 70, 239, 0.1)' : 'transparent'};
    border: 1px solid ${p => p.active ? 'rgba(217, 70, 239, 0.25)' : 'transparent'};
    transition: all 0.2s ease;

    &:hover {
        color: #c4b5fd;
        background: rgba(139, 92, 246, 0.08);
    }

    &::before {
        content: '›';
        font-size: 16px;
        opacity: 0.5;
    }
`;

const CategoryEmojis = {
    'Music': '🎵',
    'Movies': '🎬',
    'Sports': '⚽',
    'Tech': '💻',
    'Fashion': '👗',
    'Science': '🔬',
    'Travel': '✈️',
    'Education': '📚',
    'Health': '💪',
    'Politics': '🏛️',
    default: '📌'
};

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    return (
        <Sidebar>
            <CreateButton to={`/create?category=${category || ''}`}>
                ✦ Drop Your Idea
            </CreateButton>

            <SectionLabel>Browse</SectionLabel>

            <CategoryList>
                <AllLink to="/">All Ideas</AllLink>
                {categories.map(cat => (
                    <CategoryLink
                        key={cat.id}
                        to={`/?category=${cat.type}`}
                        active={category === cat.type ? 1 : 0}
                    >
                        {CategoryEmojis[cat.type] || CategoryEmojis.default} {cat.type}
                    </CategoryLink>
                ))}
            </CategoryList>
        </Sidebar>
    );
};

export default Categories;
