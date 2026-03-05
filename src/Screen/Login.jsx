import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeUsers } from "../assets/fakeUsers";

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setLogin({ ...login, [name]: value });
    console.log(login);
  };
  const handleLogin = (fakeUsers) =>
    fakeUsers.find((el) => {
      login.email === el.email ? el : "utente non trovato";
    });

  return (
    <div className="flex flex-col w-full h-96 justify-center items-center gap-2 bg-amber-50">
      <h2 className="flex text-amber-950 font-extrabold">
        {" "}
        Immetti le tue credenziali per effettuare l'accesso
      </h2>
      <div className="flex flex-row p-2 justify-between gap-2  rounded-md w-[30%] items-center">
        <p className="flex text-amber-950">Email:</p>
        <input
          className="flex p-1 w-[75%] rounded-md shadow-md shadow-amber-950 placeholder: text-amber-950 placeholder: "
          type="email"
          placeholder="user@validdomain.com"
          name="email"
          id=""
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="flex flex-row p-2 justify-between gap-2 rounded-md w-[30%] items-center">
        <p className="flex text-amber-950">Password:</p>
        <input
          className="flex p-1 w-[75%] rounded-md shadow-md shadow-amber-950 placeholder: text-amber-950 placeholder: "
          type="password"
          placeholder="1234asDF!"
          name="password"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button
        onClick={() => handleLogin(fakeUsers)}
        className="flex p-2 items-center justify-center bg-amber-900 rounded-md hover:bg-amber-900/90 cursor-pointer hover:border hover: border-amber-950 hover: shadow-md hover:shadow-amber-950 "
      >
        logga
      </button>
    </div>
  );
}

export default Login;
