import { createMuiTheme } from '@material-ui/core/styles';
import { deepPurple, amber } from "@material-ui/core/colors";

const ownTheme = createMuiTheme({
    palette: {
        primary: {
            // light: '#757ce8',
            main: deepPurple[500],
            // dark: '#002884',
            // contrastText: '#fff',
        },
        secondary: {
            // light: '#ff7961',
            main: amber[500],
            // dark: '#ba000d',
            contrastText: deepPurple[900],
        },
    },
});

export default ownTheme;