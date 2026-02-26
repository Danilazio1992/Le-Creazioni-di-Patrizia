import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex w-full h-96 justify-center items-center">
      <h1 className="flex text-amber-950 font-extrabold text-4xl text-shadow-xl text-shadow-amber-950 p-2">
        Home
      </h1>
      <Link
        to="*"
        className=" flex bg-red-950 rounded-md p-2  hover:bg-amber-600"
      >
        naviga
      </Link>
    </div>
  );
}

export default Home;
