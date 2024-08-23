import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestroMenu from "./components/RestroMenu";
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
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
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
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
