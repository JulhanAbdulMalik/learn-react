import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkMode";

const AuthLayout = (props) => {
  const { children, title, description, type } = props;

  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  {
    console.log(isDarkMode);
  }

  return (
    <div
      className={`flex justify-center min-h-screen items-center flex-col ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute top-5 right-5 bg-gray-700 text-white p-2 rounded hover:bg-gray-600"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-gray-700">{title}</h1>
        <p className="font-regular text-slate-500 mb-8">{description}</p>
        {children}

        <NavigationConditional type={type} />
      </div>
    </div>
  );
};

// Conditional Rendering
const NavigationConditional = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-gray-500 text-center mt-5">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 font-bold">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-gray-500 text-center mt-5">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 font-bold">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;

// //
// (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               onClick={() => setIsDarkMode(false)}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               onClick={() => setIsDarkMode(true)}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
//               />
//             </svg>
//           )
