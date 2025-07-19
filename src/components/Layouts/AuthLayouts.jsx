const AuthLayout = (props) => {
  const { children, title, deskription } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-gray-700">{title}</h1>
        <p className="font-regular text-slate-500 mb-8">{deskription}</p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
