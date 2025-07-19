import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold text-gray-700">Oops!</h1>
      <p className="my-5 text-xl text-slate-500">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-slate-500">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
