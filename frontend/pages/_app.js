import {ThemeProvider} from "@mui/material";
import {CssBaseline} from "@mui/material";

// import {themeLight, themeDark} from "../lib/themes";
import {theme} from "../lib/themes";


const App = ({Component, pageProps}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}


export default App;