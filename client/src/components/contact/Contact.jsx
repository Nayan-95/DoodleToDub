import { Box, styled, Typography } from '@mui/material';
import { GitHub, Instagram, LinkedIn, Email, ArrowOutward } from '@mui/icons-material';

const PageWrapper = styled(Box)`
    background: #080b12;
    min-height: 100vh;
`;

const HeroBanner = styled(Box)`
    position: relative;
    height: 320px;
    background-image: url(https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&w=600);
    background-size: cover;
    background-position: center top;
    display: flex;
    align-items: flex-end;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to bottom,
            rgba(8, 11, 18, 0.3) 0%,
            rgba(8, 11, 18, 0.92) 100%
        );
    }
`;

const HeroContent = styled(Box)`
    position: relative;
    z-index: 1;
    padding: 40px 60px;
`;

const HeroBadge = styled(Box)`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 14px;
    background: rgba(217, 70, 239, 0.15);
    border: 1px solid rgba(217, 70, 239, 0.3);
    border-radius: 99px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #d946ef;
    margin-bottom: 16px;
`;

const HeroTitle = styled(Typography)`
    font-family: 'Space Grotesk', 'Inter', sans-serif;
    font-size: 48px;
    font-weight: 800;
    color: #f1f5f9;
    letter-spacing: -1.5px;
`;

const Content = styled(Box)`
    max-width: 720px;
    margin: 0 auto;
    padding: 60px 40px 80px;
`;

const Intro = styled(Typography)`
    font-size: 18px;
    color: #64748b;
    line-height: 1.8;
    margin-bottom: 48px;
    font-style: italic;
`;

const SectionLabel = styled(Typography)`
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #d946ef;
    margin-bottom: 20px;
`;

const SocialGrid = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 48px;
`;

const SocialCard = styled('a')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 22px;
    background: rgba(15, 22, 35, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 14px;
    text-decoration: none;
    transition: all 0.25s ease;
    cursor: pointer;
    backdrop-filter: blur(8px);

    &:hover {
        border-color: rgba(217, 70, 239, 0.3);
        background: rgba(217, 70, 239, 0.05);
        transform: translateX(4px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    }
`;

const SocialLeft = styled(Box)`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const SocialIcon = styled(Box)`
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(217, 70, 239, 0.1);
    border: 1px solid rgba(217, 70, 239, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d946ef;
    transition: all 0.25s ease;

    ${SocialCard}:hover & {
        background: rgba(217, 70, 239, 0.2);
    }
`;

const SocialInfo = styled(Box)``;

const SocialName = styled(Typography)`
    font-size: 14px;
    font-weight: 700;
    color: #f1f5f9;
    font-family: 'Space Grotesk', sans-serif;
    margin-bottom: 2px;
`;

const SocialHandle = styled(Typography)`
    font-size: 12px;
    color: #475569;
`;

const ArrowIcon = styled(ArrowOutward)`
    color: #334155;
    font-size: 18px !important;
    transition: color 0.2s ease;
    ${SocialCard}:hover & {
        color: #d946ef;
    }
`;

const Divider = styled(Box)`
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(217, 70, 239, 0.2), transparent);
    margin: 40px 0;
`;

const ResponseNote = styled(Box)`
    padding: 20px 24px;
    background: rgba(217, 70, 239, 0.05);
    border: 1px solid rgba(217, 70, 239, 0.15);
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 12px;
`;

const ResponseText = styled(Typography)`
    font-size: 14px;
    color: #64748b;
    line-height: 1.6;
    span { color: #d946ef; font-weight: 600; }
`;

const Contact = () => {
    const socials = [
        {
            name: 'GitHub',
            handle: 'Nayan-95',
            href: 'https://github.com/Nayan-95',
            icon: <GitHub style={{ fontSize: 20 }} />,
        },
        {
            name: 'Instagram',
            handle: '@_nayan95',
            href: 'https://instagram.com/_nayan95',
            icon: <Instagram style={{ fontSize: 20 }} />,
        },
        {
            name: 'LinkedIn',
            handle: 'Manabodha Mahananda',
            href: 'https://www.linkedin.com/in/manabodha-mahananda-842a40221/',
            icon: <LinkedIn style={{ fontSize: 20 }} />,
        },
        {
            name: 'Email',
            handle: 'manmahanand95@gmail.com',
            href: 'mailto:manmahanand95@gmail.com',
            icon: <Email style={{ fontSize: 20 }} />,
        },
    ];

    return (
        <PageWrapper>
            <HeroBanner>
                <HeroContent>
                    <HeroBadge>👋 Say Hello</HeroBadge>
                    <HeroTitle>Let's Connect</HeroTitle>
                </HeroContent>
            </HeroBanner>

            <Content>
                <Intro>
                    Whether you have a question, a project idea, or just want to say hello —
                    I'm always open to new connections and opportunities.
                </Intro>

                <SectionLabel>Find me on</SectionLabel>
                <SocialGrid>
                    {socials.map(s => (
                        <SocialCard key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
                            <SocialLeft>
                                <SocialIcon>{s.icon}</SocialIcon>
                                <SocialInfo>
                                    <SocialName>{s.name}</SocialName>
                                    <SocialHandle>{s.handle}</SocialHandle>
                                </SocialInfo>
                            </SocialLeft>
                            <ArrowIcon />
                        </SocialCard>
                    ))}
                </SocialGrid>

                <Divider />

                <ResponseNote>
                    <Box style={{ fontSize: 22 }}>⏱️</Box>
                    <ResponseText>
                        I typically respond within <span>24–48 hours</span>. Looking forward to connecting with you!
                    </ResponseText>
                </ResponseNote>
            </Content>
        </PageWrapper>
    );
};

export default Contact;
