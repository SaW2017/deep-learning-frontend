import {Grid, Paper} from "@material-ui/core";
import yourImage from "C:/Tierschutz/b.jpg"


const Results = () => {
    return (
        <Grid container
              spacing={1}
              direction="row"
              justify="flex-start"
              alignItems="stretch"
        >
            <Grid item>
                <Paper>
                    <ul className="mdc-image-list my-image-list">
                        <li className="mdc-image-list__item">
                            <div className="mdc-image-list__image-aspect-container">
                                <img className="mdc-image-list__image" src={yourImage}/>
                            </div>
                            <div className="mdc-image-list__supporting">
                                <span className="mdc-image-list__label">Text label TEST</span>
                            </div>
                        </li>
                        <li className="mdc-image-list__item">
                            <div className="mdc-image-list__image-aspect-container">
                                <img className="mdc-image-list__image" src={"logo192.png"}/>
                            </div>
                            <div className="mdc-image-list__supporting">
                                <span className="mdc-image-list__label">Text label TEST</span>
                            </div>
                        </li>
                        <li className="mdc-image-list__item">
                            <div className="mdc-image-list__image-aspect-container">
                                <img className="mdc-image-list__image" src={"logo192.png"}/>
                            </div>
                            <div className="mdc-image-list__supporting">
                                <span className="mdc-image-list__label">Text label TEST</span>
                            </div>
                        </li>
                    </ul>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Results;