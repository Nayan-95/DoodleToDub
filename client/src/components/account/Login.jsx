import React, { useState, useEffect, useContext } from 'react';

import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

/* ─── Page wrapper: full-screen dark gradient ─── */
const PageWrapper = styled(Box)`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #080b12;
    background-image:
        radial-gradient(ellipse 70% 50% at 50% -10%, rgba(217, 70, 239, 0.18), transparent),
        radial-gradient(ellipse 50% 40% at 85% 90%, rgba(139, 92, 246, 0.12), transparent);
    padding: 24px;
`;

const Component = styled(Box)`
    width: 100%;
    max-width: 420px;
    background: rgba(15, 22, 35, 0.9);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(217, 70, 239, 0.2);
    border-radius: 24px;
    box-shadow: 0 0 60px rgba(217, 70, 239, 0.12), 0 24px 64px rgba(0, 0, 0, 0.6);
    overflow: hidden;
    animation: fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;

    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(32px); }
        to   { opacity: 1; transform: translateY(0); }
    }
`;

const LogoSection = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 40px 24px;
    background: linear-gradient(180deg, rgba(217, 70, 239, 0.08) 0%, transparent 100%);
    border-bottom: 1px solid rgba(217, 70, 239, 0.1);
`;

const Image = styled('img')`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(217, 70, 239, 0.5);
    box-shadow: 0 0 24px rgba(217, 70, 239, 0.35);
    margin-bottom: 16px;
`;

const BrandName = styled(Typography)`
    font-family: 'Space Grotesk', 'Inter', sans-serif;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.5px;
    background: linear-gradient(135deg, #f0abfc 0%, #d946ef 50%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 4px;
`;

const Tagline = styled(Typography)`
    font-size: 13px;
    color: #64748b;
    letter-spacing: 0.3px;
`;

const TabBar = styled(Box)`
    display: flex;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

const Tab = styled(Box, { shouldForwardProp: p => p !== 'active' })`
    flex: 1;
    text-align: center;
    padding: 14px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    cursor: pointer;
    color: ${p => p.active ? '#d946ef' : '#475569'};
    border-bottom: 2px solid ${p => p.active ? '#d946ef' : 'transparent'};
    transition: all 0.25s ease;
    background: ${p => p.active ? 'rgba(217, 70, 239, 0.05)' : 'transparent'};
    &:hover { color: #d946ef; background: rgba(217, 70, 239, 0.04); }
`;

const Wrapper = styled(Box)`
    padding: 32px 36px 36px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const StyledTextField = styled(TextField)`
    & .MuiInputLabel-root {
        color: #64748b;
        font-size: 14px;
        font-family: 'Inter', sans-serif;
    }
    & .MuiInputLabel-root.Mui-focused {
        color: #d946ef;
    }
    & .MuiInput-root {
        color: #f1f5f9;
        font-family: 'Inter', sans-serif;
        font-size: 15px;
    }
    & .MuiInput-root::before {
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    }
    & .MuiInput-root:hover::before {
        border-bottom: 1px solid rgba(217, 70, 239, 0.4) !important;
    }
    & .MuiInput-root::after {
        border-bottom: 2px solid #d946ef;
    }
    & input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px #0f1623 inset;
        -webkit-text-fill-color: #f1f5f9;
    }
`;

const PrimaryButton = styled(Button)`
    background: linear-gradient(135deg, #d946ef 0%, #a21caf 100%);
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    height: 48px;
    border-radius: 12px;
    text-transform: none;
    letter-spacing: 0.3px;
    font-family: 'Inter', sans-serif;
    box-shadow: 0 4px 20px rgba(217, 70, 239, 0.3);
    transition: all 0.25s ease;

    &:hover {
        background: linear-gradient(135deg, #c026d3 0%, #86198f 100%);
        box-shadow: 0 8px 28px rgba(217, 70, 239, 0.45);
        transform: translateY(-1px);
    }
    &:active { transform: translateY(0); }
`;

const SecondaryButton = styled(Button)`
    background: rgba(217, 70, 239, 0.07);
    color: #d946ef;
    font-weight: 600;
    font-size: 14px;
    height: 48px;
    border-radius: 12px;
    text-transform: none;
    border: 1px solid rgba(217, 70, 239, 0.2);
    font-family: 'Inter', sans-serif;
    transition: all 0.25s ease;

    &:hover {
        background: rgba(217, 70, 239, 0.15);
        border-color: rgba(217, 70, 239, 0.5);
        box-shadow: 0 4px 20px rgba(217, 70, 239, 0.2);
        transform: translateY(-1px);
    }
`;

const Divider = styled(Box)`
    display: flex;
    align-items: center;
    gap: 12px;
    color: #334155;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    &::before, &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: rgba(255, 255, 255, 0.06);
    }
`;

const Error = styled(Typography)`
    font-size: 12px;
    color: #f43f5e;
    font-weight: 500;
    padding: 10px 14px;
    background: rgba(244, 63, 94, 0.08);
    border: 1px solid rgba(244, 63, 94, 0.2);
    border-radius: 8px;
    margin-top: -4px;
`;

/* ── constants ─────────────────────────────────── */
const loginInitialValues = { username: '', password: '' };
const signupInitialValues = { name: '', username: '', password: '' };

/* ── component ─────────────────────────────────── */
const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

    const imageURL = 'https://img.freepik.com/premium-vector/music-planet-bulb-shape-concept-vector-logo-design-music-play-icon-symbol-design_617472-4261.jpg?w=740';

    useEffect(() => { showError(false); }, [login]);

    const onValueChange = (e) => setLogin({ ...login, [e.target.name]: e.target.value });
    const onInputChange = (e) => setSignup({ ...signup, [e.target.name]: e.target.value });

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            showError('');
            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });
            isUserAuthenticated(true);
            setLogin(loginInitialValues);
            navigate('/');
        } else {
            showError('Something went wrong! please try again later');
        }
    };

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            showError('Something went wrong! please try again later');
        }
    };

    const toggleSignup = () =>
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');

    return (
        <PageWrapper>
            <Component>
                {/* Brand header */}
                <LogoSection>
                    <Image src={imageURL} alt="DoodleToDub" />
                    <BrandName>DoodleToDub</BrandName>
                    <Tagline>Where doodles become dubs</Tagline>
                </LogoSection>

                {/* Tab switcher */}
                <TabBar>
                    <Tab active={account === 'login'} onClick={() => toggleAccount('login')}>
                        Sign In
                    </Tab>
                    <Tab active={account === 'signup'} onClick={() => toggleAccount('signup')}>
                        Sign Up
                    </Tab>
                </TabBar>

                {/* Forms */}
                {account === 'login' ? (
                    <Wrapper>
                        <StyledTextField
                            variant="standard"
                            value={login.username}
                            onChange={onValueChange}
                            name="username"
                            label="Username"
                            fullWidth
                        />
                        <StyledTextField
                            variant="standard"
                            type="password"
                            value={login.password}
                            onChange={onValueChange}
                            name="password"
                            label="Password"
                            fullWidth
                        />
                        {error && <Error>{error}</Error>}
                        <PrimaryButton variant="contained" onClick={loginUser}>
                            Sign In
                        </PrimaryButton>
                        <Divider>or</Divider>
                        <SecondaryButton onClick={toggleSignup}>
                            Create an account
                        </SecondaryButton>
                    </Wrapper>
                ) : (
                    <Wrapper>
                        <StyledTextField
                            variant="standard"
                            value={signup.name}
                            onChange={onInputChange}
                            name="name"
                            label="Full Name"
                            fullWidth
                        />
                        <StyledTextField
                            variant="standard"
                            value={signup.username}
                            onChange={onInputChange}
                            name="username"
                            label="Username"
                            fullWidth
                        />
                        <StyledTextField
                            variant="standard"
                            type="password"
                            value={signup.password}
                            onChange={onInputChange}
                            name="password"
                            label="Password"
                            fullWidth
                        />
                        {error && <Error>{error}</Error>}
                        <PrimaryButton onClick={signupUser}>
                            Create Account
                        </PrimaryButton>
                        <Divider>or</Divider>
                        <SecondaryButton onClick={toggleSignup}>
                            Already have an account
                        </SecondaryButton>
                    </Wrapper>
                )}
            </Component>
        </PageWrapper>
    );
};

export default Login;