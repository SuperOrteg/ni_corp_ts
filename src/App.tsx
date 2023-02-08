import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TagManager from "react-gtm-module";

import { greenTheme, blueTheme } from "./styles/Themes";
import { GlobalStyles } from "./styles/Global";
import { AppWrapper } from "./App.styled";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Waves from "./components/waves/Waves";

function App() {
  const [theme, setTheme] = useState("blue");

  const toggleTheme = () => {
    theme === "blue" ? setTheme("green") : setTheme("blue");
  };

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-5VFZJZ4" });
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === "blue" ? blueTheme : greenTheme}>
        <GlobalStyles />
        <AppWrapper>
          <Header toggleTheme={toggleTheme} />
          <Waves />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
