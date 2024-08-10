import { Box, styled, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Create, VideoLibrary, Group } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://t3.ftcdn.net/jpg/02/19/18/34/240_F_219183436_XJHcrXIgsx4ITPX7azlD2iByowe98cfW.jpg);
    width: 80%;
    height: 50vh;
    background-position: center;
    background-size: cover;
    margin: 0 auto;
`;

const Wrapper = styled(Box)`
    padding: 40px;
    max-width: 800px;
    margin: 0 auto;
    background-color: #f8f8f8;
`;

const Section = styled(Box)`
    margin-bottom: 40px;
`;

const Title = styled(Typography)`
    color: #2c3e50;
    margin-bottom: 20px;
    border-bottom: 3px solid #3498db;
    padding-bottom: 10px;
`;

const Subtitle = styled(Typography)`
    color: #34495e;
    margin-bottom: 15px;
`;

const Text = styled(Typography)`
    color: #555;
    margin-bottom: 15px;
`;

const StyledListItem = styled(ListItem)`
    &:hover {
        background-color: #ecf0f1;
    }
`;

const StyledListItemIcon = styled(ListItemIcon)`
    color: #3498db;
`;

const About = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Section>
                    <Title variant="h3">About Us</Title>
                    <Text variant="body1">
                        Welcome to DoodleToDub, where ideas meet creativity! We bridge the gap between innovative thinkers and talented content creators.
                    </Text>
                </Section>

                <Section>
                    <Subtitle variant="h5">Our Platform</Subtitle>
                    <List>
                        <StyledListItem>
                            <StyledListItemIcon><Create /></StyledListItemIcon>
                            <ListItemText primary="Empower introverts and idea generators who have brilliant concepts but prefer not to be in the spotlight." />
                        </StyledListItem>
                        <StyledListItem>
                            <StyledListItemIcon><VideoLibrary /></StyledListItemIcon>
                            <ListItemText primary="Support content creators seeking fresh, engaging ideas for their videos." />
                        </StyledListItem>
                    </List>
                </Section>

                <Section>
                    <Subtitle variant="h5">How it Works</Subtitle>
                    <List>
                        <StyledListItem>
                            <ListItemText primary="Users submit their unique ideas daily" />
                        </StyledListItem>
                        <StyledListItem>
                            <ListItemText primary="Content creators browse and select inspiring concepts" />
                        </StyledListItem>
                        <StyledListItem>
                            <ListItemText primary="Creators bring these ideas to life through real-time video content" />
                        </StyledListItem>
                    </List>
                </Section>

                <Section>
                    <Subtitle variant="h5">Our Mission</Subtitle>
                    <Text variant="body1">
                        Our mission is to foster a collaborative community where every voice can be heard and every idea has the potential to become captivating content. We believe that by connecting creative minds with skilled communicators, we can produce engaging, diverse, and innovative videos that resonate with audiences worldwide.
                    </Text>
                </Section>

                <Section>
                    <Text variant="body1">
                        Join us in this exciting journey of turning thoughts into visual stories. Whether you're bursting with ideas or looking for your next big inspiration, DoodleToDub is the place where creativity knows no bounds.
                    </Text>
                </Section>
            </Wrapper>
        </Box>
    )
}

export default About;