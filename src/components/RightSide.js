import {Grid, Paper} from "@material-ui/core";
import Results from "./Results";

const RightSide = () => {

    return (
        <div className="RightSide">
            <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="stretch"
            >
                <Grid item>
                    <Paper>
                        <Results/>
                   </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default RightSide;