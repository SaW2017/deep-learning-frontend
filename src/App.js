import "./App.css";
import {makeStyles, ThemeProvider, createTheme} from "@material-ui/core/styles";
import {Button, Grid, Paper} from "@material-ui/core";
import Header from "./components/Header";
import {green, orange} from "@material-ui/core/colors";
import StandardImageList from "./components/StandardImageList";
import {useRef, useState} from "react";
import Searchbar from "./components/Searchbar";
import ConfidenceSlider from "./components/ConfidenceSlider";
import * as React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 15,
        borderRadius: 15,
    },
    grid: {
        width: '100%',
        margin: '0px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
        background: theme.palette.primary.main,
    }
}));

const customTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: orange[500],
        },
        secondary: {
            main: green[500]
        }
    }
});

function App() {
    const classes = useStyles();
    // hooks used to call events in child components
    const [searchbarValue, setSearchbarValue] = useState('');
    const [confidenceThreshold, setConfidenceThreshold] = useState([0.5, 0.95]);
    const urlPath = useRef("http://localhost:3002/find");

    const urlChange = () => {
        setSearchbarValue(searchbarValue);
        setConfidenceThreshold(confidenceThreshold);
        urlPath.current.updateApiRequest(searchbarValue, confidenceThreshold);
    }

    return (
        <ThemeProvider theme={customTheme}>
            <div className="App">
                <Grid container spacing={2} className={classes.grid}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Header/>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid
                            container
                            spacing={1}
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="stretch">
                            <Grid item>
                                <Paper>
                                    <Searchbar setSearchbarValue={setSearchbarValue}/>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper>
                                    <ConfidenceSlider
                                        setConfidenceThreshold={setConfidenceThreshold}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper>
                                    <Button
                                        type={"submit"}
                                        variant={"outlined"}
                                        color={"primary"}
                                        onClick={urlChange}
                                        >Search</Button>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={9}>
                        <hr/>
                        <p style={{color: "orange"}}>Classifier and Top 3 Concepts + normalized Confidence (only >0.009):</p>
                        <hr/>
                        <StandardImageList ref={urlPath} searchbarValue={searchbarValue} confidenceThreshold={confidenceThreshold}/>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default App;