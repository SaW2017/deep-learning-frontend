import "./App.css";
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import Results from "./components/Results";
import {green, lightGreen, orange} from "@material-ui/core/colors";
import StandardImageList from "./components/StandardImageList";
import AddConcept from "./components/AddConcept";
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
    root:{
        marginBottom: 15,
        borderRadius: 15,
    },
    grid:{
        width: '100%',
        margin: '0px'
    },
    paper:{
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
        background: theme.palette.primary.main,
    }
}));

const customTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: orange[500],
        },
        secondary:{
            main: green[500]
        }
    }
});

function App() {
    const classes = useStyles();
    const [filter, setFilter]  = useState("TEST");

    return (
        <ThemeProvider theme={customTheme}>
            <div className="App">
                <p>{filter}</p>
                <Grid container spacing={2} className={classes.grid}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Header/>
                        </Paper>
                    </Grid>
                    <Grid item xs={5}>
                        <LeftSide changeFilter={filter => setFilter(filter)}/>
                    </Grid>
                    <Grid item xs={7}>
                        <AddConcept/>
                       <StandardImageList filter={filter}/>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default App;
