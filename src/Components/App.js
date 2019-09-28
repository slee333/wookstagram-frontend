import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Router from "./Router";

export default () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <>
      <GlobalStyles />
      <Router isLoggedIn={false} />
    </>
  </ThemeProvider>
);

/* Router.js에 보면 AppRouter라는 Component가 있다. isLoggedIn이 True면 LoggedInRoutes를, false면 LoggedOutRoutes를 렌더링한다.
App.js에서 기본값으로 현재 False를 넣어주고 있다
const AppRouter = ({ isLoggedIn }) => (
  <Router>
    <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
  </Router>
);
*/