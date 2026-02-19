import { styled, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HeroWrapper = styled(Box)`
    position: relative;
    width: 100%;
    min-height: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 60px 24px;
    background:
        radial-gradient(ellipse 80% 60% at 50% 0%, rgba(217, 70, 239, 0.2) 0%, transparent 70%),
        radial-gradient(ellipse 60% 50% at 80% 100%, rgba(139, 92, 246, 0.15) 0%, transparent 70%),
        #080b12;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d946ef' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        pointer-events: none;
    }
`;

const GlowOrb = styled(Box)`
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
`;

const ContentWrapper = styled(Box)`
    position: relative;
    z-index: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

const EyebrowText = styled(Typography)`
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #d946ef;
    margin-bottom: 12px;
    background: rgba(217, 70, 239, 0.1);
    padding: 6px 16px;
    border-radius: 99px;
    border: 1px solid rgba(217, 70, 239, 0.2);
`;

const MainHeading = styled(Typography)`
    font-family: 'Space Grotesk', 'Inter', sans-serif;
    font-size: clamp(3rem, 7vw, 5.5rem);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -2px;
    background: linear-gradient(135deg, #ffffff 0%, #f0abfc 40%, #d946ef 70%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

const OrText = styled(Typography)`
    font-size: 13px;
    font-weight: 600;
    color: #475569;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 4px 0;
`;

const SubText = styled(Typography)`
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    color: #64748b;
    font-weight: 400;
    max-width: 520px;
    line-height: 1.6;
    margin-top: 16px;
`;

const CTAButton = styled(Link)`
    margin-top: 32px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 32px;
    font-size: 14px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.3px;
    text-decoration: none;
    color: #fff;
    background: linear-gradient(135deg, #d946ef 0%, #7c3aed 100%);
    border-radius: 99px;
    border: 1px solid rgba(217, 70, 239, 0.3);
    box-shadow: 0 4px 24px rgba(217, 70, 239, 0.35);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 36px rgba(217, 70, 239, 0.5), 0 0 0 1px rgba(255,255,255,0.1) inset;
        filter: brightness(1.1);
    }
    &:active { transform: translateY(0); }
`;

const StatsBar = styled(Box)`
    display: flex;
    align-items: center;
    gap: 32px;
    margin-top: 40px;
    padding-top: 32px;
    border-top: 1px solid rgba(255,255,255,0.06);
    width: 100%;
    max-width: 480px;
    justify-content: center;
    flex-wrap: wrap;
`;

const Stat = styled(Box)`
    text-align: center;
`;

const StatValue = styled(Typography)`
    font-size: 20px;
    font-weight: 800;
    font-family: 'Space Grotesk', sans-serif;
    background: linear-gradient(135deg, #d946ef, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

const StatLabel = styled(Typography)`
    font-size: 11px;
    color: #475569;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 2px;
`;

const Banner = () => {
    return (
        <HeroWrapper>
            {/* Background glow orbs */}
            <GlowOrb style={{ width: 400, height: 400, background: 'rgba(217,70,239,0.12)', top: -100, left: '30%' }} />
            <GlowOrb style={{ width: 300, height: 300, background: 'rgba(139,92,246,0.1)', bottom: -80, right: '20%' }} />

            <ContentWrapper>
                <EyebrowText>✨ Ideas × Creativity</EyebrowText>

                <MainHeading>DoodleToDub</MainHeading>

                <OrText>— Where ideas inspire content —</OrText>

                <SubText>
                    Share your creative doodles and ideas. Let talented creators
                    dub them into stunning visual content.
                </SubText>

                <CTAButton to="/create">
                    🎨 Drop Your Idea
                </CTAButton>

                <StatsBar>
                    <Stat>
                        <StatValue>∞</StatValue>
                        <StatLabel>Ideas</StatLabel>
                    </Stat>
                    <Stat>
                        <StatValue>🎵</StatValue>
                        <StatLabel>Music</StatLabel>
                    </Stat>
                    <Stat>
                        <StatValue>🎬</StatValue>
                        <StatLabel>Content</StatLabel>
                    </Stat>
                </StatsBar>
            </ContentWrapper>
        </HeroWrapper>
    );
};

export default Banner;
