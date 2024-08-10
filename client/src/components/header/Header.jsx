import { AppBar, Toolbar, styled } from '@mui/material'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Component = styled(AppBar)`
    background: white;
    color: black;
    box-shadow: 2px 2px 2px #fc33ff;
    border-bottom: 1px solid #E0E0E0;
`;

const Container = styled(Toolbar)`
    display: flex;
    justify-content: space-between; /* Aligns items to both ends */
    align-items: center; /* Centers items vertically */
`;

const Logo = styled('img')`
    height: 40px; /* Adjust logo size */
    margin-left: none; /* Add some margin to the left of the logo */
`;

const LogoText = styled('span')`
    display: flex;
    justify-content: left;
    font-size: 40px; /* Adjust text size */
    font-weight: bold;
    color: #fc33ff; /* Pink color for text */
`;

const LinksContainer = styled('div')`
    display: flex;
    align-items: center;
`;

const StyledLink = styled(Link)`
    padding: 20px;
    margin: 0 15px; /* Increase the distance between the buttons */
    color: #fc33ff; /* Pink color for text */
    text-decoration: none;
    font-weight: 500;
    border-radius: 8px; /* Add some border radius for normal state as well */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Subtle box shadow in normal state */
    transition: background-color 2s, color 0.3s, font-weight 0.3s, box-shadow 0.3s, border-radius 2s, border-color 0.3s;
    transform-style: preserve-3d; /* Allow 3D transform effects */
    &:hover {
        background-color: #fc33ff;  /* Pink background color */
        color: #000;  /* Black text color */
        font-weight: bold;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5); /* Dark black box shadow on hover */
        border-radius: 50px; /* Border radius on hover */
        border-color: #fc33ff; /* Pink outline on hover */
    }
`;

const Header = () => {
    const navigate = useNavigate();
    const ImageURL = 'https://img.freepik.com/premium-vector/music-planet-bulb-shape-concept-vector-logo-design-music-play-icon-symbol-design_617472-4261.jpg?w=740';

    const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItem:'center'}}>
                <Logo src={ImageURL} alt="Logo" /> {/* Replace with your logo path */}
                <LogoText>DoodleToDub</LogoText>
                </div>
                <LinksContainer>
                    <StyledLink to='/'>HOME</StyledLink>
                    <StyledLink to='/about'>ABOUT</StyledLink>
                    <StyledLink to='/contact'>CONTACT</StyledLink>
                    <StyledLink to='/account' onClick={logout}>LOGOUT</StyledLink>
                </LinksContainer>
            </Container>
        </Component>
    )
}

export default Header;
