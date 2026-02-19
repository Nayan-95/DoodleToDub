
import { Grid, styled } from '@mui/material';

//components
import Banner from '../banner/Banner';
import Categories from './Categories';
import Posts from './post/Posts';

const ContentGrid = styled(Grid)`
    background: #080b12;
    min-height: calc(100vh - 68px);
`;

const SidebarGrid = styled(Grid)`
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    background: rgba(15, 22, 35, 0.4);
`;

const Home = () => {
    return (
        <>
            <Banner />
            <ContentGrid container>
                <SidebarGrid item lg={2} xs={12} sm={2}>
                    <Categories />
                </SidebarGrid>
                <Grid container item xs={12} sm={10} lg={10}>
                    <Posts />
                </Grid>
            </ContentGrid>
        </>
    );
};

export default Home;