import React from "react";
import { gql } from "apollo-boost";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Router from "./Router";
import { useQuery } from "react-apollo-hooks";
import styled, { ThemeProvider } from "styled-components";
import Footer from "./Footer";

// GraphQL query isLoggedIn을 정의해줍니다.
// @client: d
const QUERY = gql`
  {
    isLoggedIn @client
  }
`;
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);
  console.log(useQuery(QUERY).data);
  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyles />
        <Router isLoggedIn={isLoggedIn} />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

/* Router.js에 보면 AppRouter라는 Component가 있다. isLoggedIn이 True면 LoggedInRoutes를, false면 LoggedOutRoutes를 렌더링한다.
App.js에서 기본값으로 현재 False를 넣어주고 있다
const AppRouter = ({ isLoggedIn }) => (
  <Router>
    <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
  </Router>
);
*/
