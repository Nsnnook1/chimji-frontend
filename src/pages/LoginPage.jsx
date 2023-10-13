import logo from "../assets/images/logo.jpg";
import LoginForm from "../features/auth/LoginForm";
import "../styles/login.scss";

export default function LoginPage() {
  return (
    <div className="login">
      <img src={logo} alt="logo" className="" />
      <LoginForm/>
    </div>
  );
}

// // import Button from "../component/Button";
// // import RegisterPage from "./RegisterPage";
// import { Fragment, useState, useEffect } from "react";

// export default function LoginPage() {
//   const [loading, setLoading] = useState(false)
//   const [login, setLogin] = useState

//   useEffect(() => {
//     setLoading(false)
//   }, [])

//   return (
//     <Fragment>
//       { loading ? (
//         <div>Loading</div>
//       ) : (
//         <div className="login-wrapper">
//           <div className="login-body">
//             <div className="login-horizontal">
//               <div className="login-bg">
//                 <img src="" alt="logo" />
//               </div>
//               <div className="login-vertical">
//                 <h1 className="login-header">Login</h1>
//                 <h6 className="login-subheader">
//                   Please login to your account and strar the adventure
//                 </h6>
//                 <p className="login-name">Email</p>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="example@gmail.com"
//                 />
//                 <p className="login-name">Password</p>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   placeholder="12345678"
//                 />
//                 <button className="login-button">confirm</button>
//                 <button className="login-button">register</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </Fragment>
//   );
// }
