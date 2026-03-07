import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeUsers } from "../assets/fakeUsers";
import { useAuth } from "../AuthContext/authContext";

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const passwordErrors = {
    length: login.password.length >= 8,
    upper: /[A-Z]/.test(login.password),
    lower: /[a-z]/.test(login.password),
    number: /\d/.test(login.password),
    special: /[!@#$%^&*]/.test(login.password),
  };
  const { state: authState, dispatch: authDispatch } = useAuth();
  const handleChange = (e) => {
    const emailInvalidCharsRegex = /[^a-zA-Z0-9._%+-@]/;
    const passwordInvalidCharsRegex =
      /[^a-zA-Z0-9!@#$%^&*()_\-+=\[\]{};:'",.<>/?|\\]/;
    let { name, value } = e.target;
    if (name === "email" && emailInvalidCharsRegex.test(value)) {
      return;
    }
    if (name === "password" && passwordInvalidCharsRegex.test(value)) {
      return;
    }
    setLogin({ ...login, [name]: value });
  };
  const handleLogin = (fakeUsers) => {
    let user = fakeUsers.find(
      (el) => el.email === login.email.trim().toLowerCase(),
    ); // ho aggiunto trim e lower per evitare problemi di copia e incolla e case sensitive visto che gmail gestisce solo case insensitive
    if (user) {
      if (user.password === login.password) {
        authDispatch({ type: "LOGIN_SUCCESS", payload: { user } });
        navigate("/");
        setLogin({ email: "", password: "" });
      } else {
        alert("Password Errata");
        setLogin({ ...login, password: "" });
      }
    } else {
      alert("Email non Registrata");
      setLogin({ email: "", password: "" });
    }
  };

  return (
    <div className="flex flex-col w-full h-96 justify-center items-center gap-2 bg-amber-50">
      <h2 className="flex text-amber-950 font-extrabold w-[30%] justify-center">
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
          value={login.email}
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
          value={login.password}
        />
      </div>
      <ul className="flex flex-row text-[14px] w-[30%] p-2 gap-1 justify-around">
        <li className="text-amber-950 flex">la password deve contenere: </li>
        <li
          className={`${passwordErrors.length ? "text-green-800" : "text-red-600"} flex `}
        >
          8 caratteri
        </li>
        <li
          className={`${passwordErrors.upper ? "text-green-800" : "text-red-600"} flex `}
        >
          1 maiuscola
        </li>
        <li
          className={`${passwordErrors.lower ? "text-green-800" : "text-red-600"} flex `}
        >
          1 minuscola
        </li>
        <li
          className={`${passwordErrors.number ? "text-green-800" : "text-red-600"} flex `}
        >
          1 numero
        </li>
        <li
          className={`${passwordErrors.special ? "text-green-800" : "text-red-600"} flex `}
        >
          1 simbolo
        </li>
      </ul>
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
