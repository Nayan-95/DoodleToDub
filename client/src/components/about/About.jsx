import { Box, styled, Typography } from '@mui/material';
import { Create, VideoLibrary, AutoAwesome } from '@mui/icons-material';

const PageWrapper = styled(Box)`
    background: #080b12;
    min-height: 100vh;
`;

const HeroBanner = styled(Box)`
    position: relative;
    height: 360px;
    background-image: url(https://t3.ftcdn.net/jpg/02/19/18/34/240_F_219183436_XJHcrXIgsx4ITPX7azlD2iByowe98cfW.jpg);
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to bottom,
            rgba(8, 11, 18, 0.2) 0%,
            rgba(8, 11, 18, 0.9) 100%
        );
    }
`;

const HeroContent = styled(Box)`
    position: relative;
    z-index: 1;
    padding: 40px 60px;
    max-width: 860px;
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
    font-size: 52px;
    font-weight: 800;
    color: #f1f5f9;
    line-height: 1.1;
    letter-spacing: -1.5px;
`;

const Content = styled(Box)`
    max-width: 820px;
    margin: 0 auto;
    padding: 60px 40px 80px;
`;

const Section = styled(Box)`
    margin-bottom: 56px;
`;

const SectionLabel = styled(Typography)`
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #d946ef;
    margin-bottom: 16px;
`;

const SectionTitle = styled(Typography)`
    font-family: 'Space Grotesk', 'Inter', sans-serif;
    font-size: 26px;
    font-weight: 700;
    color: #f1f5f9;
    letter-spacing: -0.5px;
    margin-bottom: 16px;
`;

const SectionBody = styled(Typography)`
    font-size: 16px;
    color: #64748b;
    line-height: 1.8;
`;

const Divider = styled(Box)`
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(217, 70, 239, 0.2), transparent);
    margin: 48px 0;
`;

const FeatureGrid = styled(Box)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 24px;
`;

const FeatureCard = styled(Box)`
    padding: 24px;
    background: rgba(15, 22, 35, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    transition: all 0.3s ease;

    &:hover {
        border-color: rgba(217, 70, 239, 0.25);
        background: rgba(217, 70, 239, 0.04);
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    }
`;

const FeatureIcon = styled(Box)`
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(217, 70, 239, 0.1);
    border: 1px solid rgba(217, 70, 239, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    color: #d946ef;
`;

const FeatureTitle = styled(Typography)`
    font-size: 14px;
    font-weight: 700;
    color: #f1f5f9;
    margin-bottom: 8px;
    font-family: 'Space Grotesk', sans-serif;
`;

const FeatureText = styled(Typography)`
    font-size: 13px;
    color: #475569;
    line-height: 1.65;
`;

const StepList = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 20px;
`;

const StepItem = styled(Box)`
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 16px 20px;
    background: rgba(15, 22, 35, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 12px;
`;

const StepNumber = styled(Box)`
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: linear-gradient(135deg, #d946ef, #7c3aed);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 800;
    color: #fff;
    flex-shrink: 0;
    font-family: 'Space Grotesk', sans-serif;
`;

const StepText = styled(Typography)`
    font-size: 14px;
    color: #64748b;
    line-height: 1.6;
    padding-top: 5px;
`;

const About = () => {
    return (
        <PageWrapper>
            <HeroBanner>
                <HeroContent>
                    <HeroBadge>✦ Our Story</HeroBadge>
                    <HeroTitle>About DoodleToDub</HeroTitle>
                </HeroContent>
            </HeroBanner>

            <Content>
                <Section>
                    <SectionLabel>Who we are</SectionLabel>
                    <SectionTitle>Where ideas meet creativity</SectionTitle>
                    <SectionBody>
                        Welcome to DoodleToDub, where ideas meet creativity! We bridge the gap between
                        innovative thinkers and talented content creators, turning every spark of
                        imagination into something extraordinary.
                    </SectionBody>
                </Section>

                <Divider />

                <Section>
                    <SectionLabel>What we offer</SectionLabel>
                    <SectionTitle>Our Platform</SectionTitle>
                    <FeatureGrid>
                        <FeatureCard>
                            <FeatureIcon><Create style={{ fontSize: 20 }} /></FeatureIcon>
                            <FeatureTitle>For Idea Makers</FeatureTitle>
                            <FeatureText>
                                Empower introverts and idea generators who have brilliant concepts but prefer not to be in the spotlight.
                            </FeatureText>
                        </FeatureCard>
                        <FeatureCard>
                            <FeatureIcon><VideoLibrary style={{ fontSize: 20 }} /></FeatureIcon>
                            <FeatureTitle>For Creators</FeatureTitle>
                            <FeatureText>
                                Support content creators seeking fresh, engaging ideas for their next viral video.
                            </FeatureText>
                        </FeatureCard>
                        <FeatureCard>
                            <FeatureIcon><AutoAwesome style={{ fontSize: 20 }} /></FeatureIcon>
                            <FeatureTitle>For Everyone</FeatureTitle>
                            <FeatureText>
                                A collaborative community where every voice can be heard and every doodle can become a dub.
                            </FeatureText>
                        </FeatureCard>
                    </FeatureGrid>
                </Section>

                <Divider />

                <Section>
                    <SectionLabel>The process</SectionLabel>
                    <SectionTitle>How it Works</SectionTitle>
                    <StepList>
                        <StepItem>
                            <StepNumber>1</StepNumber>
                            <StepText>Users submit their unique ideas and creative doodles daily</StepText>
                        </StepItem>
                        <StepItem>
                            <StepNumber>2</StepNumber>
                            <StepText>Content creators browse and select the most inspiring concepts</StepText>
                        </StepItem>
                        <StepItem>
                            <StepNumber>3</StepNumber>
                            <StepText>Creators bring these ideas to life through real-time video content</StepText>
                        </StepItem>
                    </StepList>
                </Section>

                <Divider />

                <Section>
                    <SectionLabel>Our purpose</SectionLabel>
                    <SectionTitle>Our Mission</SectionTitle>
                    <SectionBody>
                        Our mission is to foster a collaborative community where every voice can be heard
                        and every idea has the potential to become captivating content. We believe that
                        by connecting creative minds with skilled communicators, we can produce engaging,
                        diverse, and innovative videos that resonate with audiences worldwide.
                    </SectionBody>
                </Section>
            </Content>
        </PageWrapper>
    );
};

export default About;