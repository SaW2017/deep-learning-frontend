import {Grid, Paper} from "@material-ui/core";
import Searchbar from "./Searchbar";
import ConfidenceSlider from "./ConfidenceSlider";
import ImageInformation from "./ImageInformation";

const LeftSide = () => {

    return (
        <div className="LeftSide">
            <Grid
                container
                spacing={1}
                direction="column"
                justify="flex-start"
                alignItems="stretch">
                <Grid item>
                    <Paper>
                        <Searchbar/>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper>
                        <ConfidenceSlider/>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper>
                        <ImageInformation/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default LeftSide;