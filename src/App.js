import React, { useContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/Auth-context";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
  //   if (storedUserLoggedInInfo === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);
  
  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };
  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  // };
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader/>
      <main>
        {!ctx.isLoggedIn && <Login/>}
        {ctx.isLoggedIn && <Home />}
      </main>
      </React.Fragment>
  );
}

export default App;
