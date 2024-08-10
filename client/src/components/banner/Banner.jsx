import { styled, Box, Typography, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GlobalStyles } from '@mui/system';

const theme = createTheme();

const Image = styled(Box)`
    width: 100%;
    background-color: #FFFF;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    line-height: 1;
    font-family: 'Merriweather', serif;
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: white;
    font-family: 'Merriweather', serif;
`;

const TopContainer = styled(Box)`
    display: flex;
    align-items: center;
    margin-bottom: 20px; /* Add some space between the elements */
`;

const BottomContainer = styled(Box)`
    display: flex;
    align-items: center;
    margin-top: 20px; /* Add some space between the elements */
`;

const Banner = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles styles={{ 
                '@import': 'url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap")' 
            }} />
            <Image>
                <TopContainer>
                    <Heading>
                        <span style={{ color: '#fc33ff' }}>D</span>
                        <span style={{ color: 'black' }}>oodle </span>
                        <span style={{ color: '#fc33ff' }}>U</span>
                        <span style={{ color: 'black' }}>r </span>
                        <span style={{ color: '#fc33ff' }}>I</span>
                        <span style={{ color: 'black' }}>deas</span>
                    </Heading>
                </TopContainer>
                <SubHeading>OR</SubHeading>
                <BottomContainer>
                    <Heading>
                        <span style={{ color: '#fc33ff' }}>D</span>
                        <span style={{ color: 'black' }}>ub </span>
                        <span style={{ color: '#fc33ff' }}>T</span>
                        <span style={{ color: 'black' }}>o </span>
                        <span style={{ color: '#fc33ff' }}>V</span>
                        <span style={{ color: 'black' }}>isualization</span>
                    </Heading>
                </BottomContainer>
            </Image>
        </ThemeProvider>
    );
}

export default Banner;
