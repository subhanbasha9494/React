import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
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
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
