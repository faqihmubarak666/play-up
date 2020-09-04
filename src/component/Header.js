// import React, { Component } from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import Home from "../pages/landingPage/Home";
// import Features from "../pages/landingPage/Features";
// import Category from "../pages/landingPage/Category";
// import SignIn from "../pages/landingPage/signUp/SignIn";
// import PlayVideo from "../pages/landingPage/PlayVideo";
// import { SideBar } from "./SideBar";

// export class Header extends Component {
//   render() {
//     const { adminPage } = this.props;

//     if (adminPage == true) {
//       return <SideBar />;
//     }
//     return (
//       <div>
//         <BrowserRouter>
//           <nav class="navbar navbar-expand-lg navbar-light bg-light">
//             <a class="navbar-brand" href="/">
//               PLAY UP!
//             </a>
//             <button
//               class="navbar-toggler"
//               type="button"
//               data-toggle="collapse"
//               data-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarNav">
//               <ul class="navbar-nav">
//                 <li class="nav-item active">
//                   <a class="nav-link" href="/">
//                     Home
//                     {/* <span class="sr-only">(current)</span> */}
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="/features">
//                     Features
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="/category">
//                     Category
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="/sign-in">
//                     Sign In
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <Route path="/features" component={Features} />
//             <Route path="/category" component={Category} />
//             <Route path="/sign-in" component={SignIn} />
//             <Route path="/play-video" component={PlayVideo} />
//           </Switch>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

// export default Header;
