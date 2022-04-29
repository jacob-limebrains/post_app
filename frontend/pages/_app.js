import {ThemeProvider, CssBaseline, createTheme, useTheme, Box} from "@mui/material";

import {getTheme} from "../lib/themes";

const darkModeTheme = createTheme(getTheme('dark'));

const App = ({Component, pageProps}) => {
    return (
        <ThemeProvider theme={darkModeTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default App;