import {Container, Box, Divider, CssBaseline, makeStyles} from "@material-ui/core";

const useStyles =makeStyles(() => ({
    container: {
        padding: 0,
    },
}))


const Home = () => {
    const classes = useStyles();
    return (
    <>
        <CssBaseline/>
        <Container className={classes.container} maxWidth="lg">
            <Box sx={{bgcolor: '#cfe8fc', height: '100vh'}}/>
            <Divider orientation="vertical" />
            <Box sx={{bgcolor: 'red', height: '100vh'}}/>
        </Container>
    </>
    )
}

export default Home;