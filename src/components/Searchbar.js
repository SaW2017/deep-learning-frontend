import {Typography, Button} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {makeStyles} from "@material-ui/core/styles";
import {useState} from "react";

const searchbarStyle = makeStyles({
    searchbar: {
        width: "inherit",
        padding: "20px"
    },
    input: {
        marginTop: "15px"
    },
    button: {
        width: "inherit",
        padding: "20px"
    }
});

const Searchbar = (props) => {
    const classes = searchbarStyle();
    const [conceptValue, setConceptValue] = useState("");

    return (
        <div className={classes.searchbar}>
            <Typography>Concept:</Typography>
            <TextField id="outlined-search"
                       className={classes.input}
                       label="Enter Concept"
                       type="search"
                       variant="outlined"
                       value={conceptValue}
                       onChange={event => {
                           var eventValue = event.target.value;
                           console.log("Searchbar");
                           console.log(eventValue);
                           setConceptValue(eventValue);
                       }}
            />
            <Button type={"submit"} color={"primary"} onClick={() => {
                props.setFilter(conceptValue);
            }
            }>Search</Button>
        </div>

    );
}

export default Searchbar;


