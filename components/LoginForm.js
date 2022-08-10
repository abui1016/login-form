import { useState } from "react";

const LoginForm = ({ LoginData, setIsValidLogin }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const account = LoginData.find(
      (el) => el.username === user && el.password === password
    );
    if (account) setIsValidLogin(true);
    else alert("Invalid Login Credentials");

    setUser("");
    setPassword("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col my-2 items-center h-72 w-96 justify-center bg-slate-100 rounded">
        <h1 className="mb-4 px-10 text-2xl ">Login Form</h1>
        <div className="mx-2  py-1 my-1">
          <label htmlFor="user" className="px-2 ">
            Username
          </label>
          <input
            required
            onChange={(e) => setUser(e.target.value)}
            type="text"
            name="user"
            id="user"
            className="border-2 rounded px-2 my-2 outline-none focus:border-blue-400"
          />
        </div>
        <div className="mx-2 my-1">
          <label htmlFor="password" className="px-2 ml-1">
            Password
          </label>
          <input
            required
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            className="border-2 rounded px-2 my-2 outline-none focus:border-blue-400"
          />
        </div>
        <div className="flex flex-row w-full justify-center mt-4 mx-2">
          <button
            type="submit"
            className="border-2 border-blue-400 rounded w-1/4 mr-2 hover:bg-blue-400 hover:text-white"
          >
            Login
          </button>
          <button
            type="button"
            className="border-2 border-blue-400 rounded w-1/4 ml-2 hover:bg-blue-400 hover:text-white"
          >
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
