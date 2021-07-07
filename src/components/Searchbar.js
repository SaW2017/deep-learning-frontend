import {useEffect, useState} from "react";
import Axios from "axios";
import {Typography} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {makeStyles} from "@material-ui/core/styles";

const searchbarStyle = makeStyles({
    searchbar: {
        width: "inherit",
        padding: "20px"
    },
    input:{
        marginTop: "15px"
    }
});

const Searchbar = (props) => {
    const classes = searchbarStyle();
    const [searchTerm, setSearchTerm] = useState("");
    const [fullImageList, setFullImageList] = useState([]);

    // initial get all Images
    useEffect(() => {
        try{
            Axios.get("http://localhost:3002/concepts").then((response) => {
                setFullImageList(response.data);
                console.log(fullImageList);
            })
        }catch (e) {
            console.log(e);
        }
    }, [])


    return (
        <div className={classes.searchbar}>
            <Typography>Concept:</Typography>
            <TextField id="outlined-search" className={classes.input} label="Search field" type="search" variant="outlined"  onChange={event => {
                setSearchTerm((event.target.value));
                console.log(event.target.value);
            }}/>

            {fullImageList.filter((val) => {
                if(searchTerm == ""){
                    return val;
                }else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                }
            }).map((val,key) => {
                return (
                    <div>
                        <p>{val.name}</p>
                    </div>);
            })}
        </div>
    );
}

export default Searchbar;


