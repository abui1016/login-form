import { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import LoginData from "../data/LoginData";

export default function Home() {
  const [isValidLogin, setIsValidLogin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsValidLogin(false);
    }, 3500);
  }, [isValidLogin]);

  return (
    <div className="flex justify-center items-center h-screen bg-blue-200">
      {isValidLogin ? (
        <div className="animate-bounce">Successful Login!</div>
      ) : (
        <LoginForm LoginData={LoginData} setIsValidLogin={setIsValidLogin} />
      )}
    </div>
  );
}
