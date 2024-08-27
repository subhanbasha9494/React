import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestroMenu from "./components/RestroMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// const Title = () => (
//   <div id="container">
//     <h2>Hallo Samivulla</h2>
//   </div>
// );
// const test = <h2>Hallo Ayman</h2>;
// const number = 1000;
// const JsxHeading = () => {
//   return (
//     <div>
//       <h1 className="">Hallo React JS</h1>
//       <Title  />
//       {number}
//       {test}
//     </div>
//   );
// };

const AppLayout = () => {
  const [userName, setUserName] = useState();
  //authentication
  useEffect(() => {
    //Make API call and send usrname and passwrd
    const data = {
      name: "Subhan",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

//routing configutation
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestroMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
