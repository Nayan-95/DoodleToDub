import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, LinkedIn, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&w=600);
    width: 80%;
    height: 40vh;  /* Reduced the height */
    background-position: top;  /* Aligns the image to the top */
    background-size: cover;
    margin: 0 auto;
`;


const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Contact Me</Typography>
                <Text variant="h5">I'd love to hear from you!</Text>
                <Text variant="body1">
                    Whether you have a question, a project idea, or just want to say hello,
                    I'm always open to new connections and opportunities.
                </Text>
                <Box sx={{ mt: 3 }}>
                    <Typography variant="h5">Connect with me on social media:</Typography>
                    <Link href="https://github.com/Nayan-95" color="inherit" sx={{ mr: 2 }}>
                        <GitHub /> GitHub
                    </Link>
                    <Link href="https://instagram.com/_nayan95" color="inherit" sx={{ mr: 2 }}>
                        <Instagram /> Instagram
                    </Link>
                    <Link href="https://www.linkedin.com/in/manabodha-mahananda-842a40221/" color="inherit" sx={{ mr: 2 }}>
                        <LinkedIn /> LinkedIn
                    </Link>
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Typography variant="h5">Or drop me an email:</Typography>
                    <Link href="mailto:manmahanand95@gmail.com" color="inherit">
                        <Email /> manmahanand95@gmail.com
                    </Link>
                </Box>
                <Text variant="body1" sx={{ mt: 3 }}>
                    I typically respond within 24-48 hours. Looking forward to connecting with you!
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;
