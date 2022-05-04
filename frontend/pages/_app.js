import React, {useState} from "react";
import {ThemeProvider, CssBaseline} from "@mui/material";

import NavBar from "../components/navbar";

import {lightTheme, darkTheme} from "../lib/themes";

const App = ({Component, pageProps}) => {
    const [darkMode, setDarkMode] = useState(true)

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline/>
            <NavBar toggleOnChange={() => setDarkMode(!darkMode)} />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default App;