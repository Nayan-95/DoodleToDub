import { AppBar, Toolbar, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Component = styled(AppBar)`
    background: rgba(8, 11, 18, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    color: #f1f5f9;
    box-shadow: 0 1px 0 rgba(217, 70, 239, 0.2), 0 4px 24px rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid rgba(217, 70, 239, 0.15);
`;

const Container = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px !important;
    min-height: 68px !important;
`;

const LogoWrapper = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    cursor: pointer;
`;

const Logo = styled('img')`
    height: 38px;
    width: 38px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(217, 70, 239, 0.5);
    box-shadow: 0 0 16px rgba(217, 70, 239, 0.3);
`;

const LogoText = styled('span')`
    font-family: 'Space Grotesk', 'Inter', sans-serif;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.5px;
    background: linear-gradient(135deg, #f0abfc 0%, #d946ef 50%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

const LinksContainer = styled('div')`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const StyledLink = styled(Link)`
    padding: 8px 18px;
    color: #94a3b8;
    text-decoration: none;
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    border-radius: 8px;
    border: 1px solid transparent;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(217, 70, 239, 0.1), rgba(139, 92, 246, 0.1));
        opacity: 0;
        transition: opacity 0.25s ease;
    }

    &:hover {
        color: #d946ef;
        border-color: rgba(217, 70, 239, 0.3);
        box-shadow: 0 0 16px rgba(217, 70, 239, 0.15);
        transform: translateY(-1px);
    }

    &:hover::before {
        opacity: 1;
    }
`;

const LogoutLink = styled(StyledLink)`
    color: #d946ef;
    border-color: rgba(217, 70, 239, 0.25);
    background: rgba(217, 70, 239, 0.06);

    &:hover {
        background: rgba(217, 70, 239, 0.15);
        border-color: rgba(217, 70, 239, 0.5);
        box-shadow: 0 0 20px rgba(217, 70, 239, 0.25);
    }
`;

const Header = () => {
    const navigate = useNavigate();
    const ImageURL = 'https://img.freepik.com/premium-vector/music-planet-bulb-shape-concept-vector-logo-design-music-play-icon-symbol-design_617472-4261.jpg?w=740';

    const logout = async () => navigate('/account');

    return (
        <Component>
            <Container>
                <LogoWrapper onClick={() => navigate('/')}>
                    <Logo src={ImageURL} alt="Logo" />
                    <LogoText>DoodleToDub</LogoText>
                </LogoWrapper>
                <LinksContainer>
                    <StyledLink to='/'>Home</StyledLink>
                    <StyledLink to='/about'>About</StyledLink>
                    <StyledLink to='/contact'>Contact</StyledLink>
                    <LogoutLink to='/account' onClick={logout}>Logout</LogoutLink>
                </LinksContainer>
            </Container>
        </Component>
    );
}

export default Header;
