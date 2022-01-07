import React, { useState } from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";

import theme from "../lib/theme";
import { LoggedRouter, NotLogged } from "../lib/routes";
import AuthContext from "../lib/context/logged";

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ logged, setLogged }}>
        <StatusBar animated barStyle="light-content" />
        {logged ? <LoggedRouter /> : <NotLogged />}
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
