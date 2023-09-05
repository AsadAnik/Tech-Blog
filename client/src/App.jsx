// // import React from "react";
// // import { Redirect, Route, Switch } from "react-router-dom";
// // import "./App.css";
// // import Blog from "./pages/Blog";
// // import Home from "./pages/Home";

// // const App = () => {
// //   return (
// //     <div className="container">
// //       <Switch>
// //         <Route path="/" exact component={Home} />
// //         <Route path="/blog/:id" component={Blog} />
// //         <Redirect to="/" />
// //       </Switch>
// //     </div>
// //   );
// // };

// // export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Blog from "./pages/Blog";
// import Home from "./pages/Home";
// import Login from './components/auth/LoginForm'
// import Register from './components/auth/RegisterForm'

// const App = () => {
//   return (
//     <div className="container">
//       <Router>
//         <Routes>
//           <Route path="/Home" element={<Home />} />
//           <Route path="/blog/:id" element={<Blog />} />
//         </Routes>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default App;



import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog";
import Home from "./pages/Home/index";
import Login from './components/auth/LoginForm'
import Register from './components/auth/RegisterForm'

const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog/:id" exact element={<Blog />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
