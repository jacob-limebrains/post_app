export const getTheme = mode => ({
    ...(mode === 'light') ? {
        palette: {
            secondary: {
                main: '#fffs',
            },
            background: {
                default: "#F6F7FF",
                paper: "#f0f0f0"
            },
            text: {
                primary: "#222",
                secondary: "#444"
            },
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#fff',
                        backdropFilter: 'blur(6px)',
                        color: '#222',
                    }
                }
            },
            MuiLink: {
                styleOverrides: {
                    root: {
                        color: '#222',
                        textDecoration: 'none'
                    }
                }
            }
        }
    } : {
        palette: {
            secondary: {
                main: 'rgb(80, 80, 80)',
            },
            background: {
                default: "#222",
                paper: "#444"
            },
            text: {
                primary: "#fff",
                secondary: "#6b778c"
            },
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#111',
                        backdropFilter: 'blur(6px)',
                        color: '#fff',
                    }
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#555'
                    }
                }
            },
            MuiLink: {
                styleOverrides: {
                    root: {
                        color: '#fff',
                        textDecoration: 'none'
                    }
                }
            },
        }
    }

});