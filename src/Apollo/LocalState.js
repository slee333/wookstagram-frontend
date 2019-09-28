// IsLoggedIn을 false, 나중에 로그인 성공하면 token을 localstorage에 두는것
export const defaults = {
  isLoggedIn: localStorage.getItem("token") !== null ? true : false
};


// 우리 앱은 지금 Local만 있으니..원래는 post가 열리고 닫히고 이런걸 다 LocalState에서 조절하는데
// 일단 지금은 로그인만 조절해봅시다.
// 웹사이트의 LocalStorage:
// 크롬에서 F12를 누른다음 localStorage를 쳐보세요. 말 그래도 서버가 아닌 사용자가 프론트엔드를 이용하는데 필요한것들이 이거에요. 저희가 사용하는 기기 (로컬)에 쓰이는 정보들이 여기 저장됩니다.

// Resolver를 정의해봅시다. 로그인과 로그아웃 Resolver들
// 유저가 로그인하면 토큰을 받아 그걸 localStorage와 저장.
// 캐시에는 로그인 유무를 저장. 로그아웃은 그걸 반대로!

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem("token", token);
      cache.writeData({
        data: {
          isLoggedIn: true
        }
      });
      return null;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("token");
      window.location.reload(); // 캐시도 있고 하니 refresh해줍니다.
      return null;
    }
  }
};
