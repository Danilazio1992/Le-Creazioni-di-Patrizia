function CityCard({
  city,
  handleRemove,
  hovered,
  setHovered,
  idHovered,
  setIdHovered,
}) {
  let modify = "H";

  let classe = [
    "scale-95 transition-all duration-500 opacity-50",
    "scale-105 transition-all duration-500 z-10",
    "Scale-100",
  ];

  const handleEnter = (e) => {
    setHovered(true);
    setIdHovered(+e.currentTarget.id);
  };
  const handleLeave = () => {
    setHovered(false);
    setIdHovered(-1);
  };

  return (
    <div
      id={city.id}
      className={`flex flex-wrap rounded-2xl min-w-[280px] w-[15%] shadow-lg shadow-amber-950 justify-center overflow-hidden bg-amber-950   ${idHovered === city.id ? classe[1] : idHovered !== -1 ? classe[0] : classe[2]}`}
      onMouseEnter={(e) => handleEnter(e)}
      onMouseLeave={() => handleLeave()}
    >
      <div className="flex flex-col aspect-[4/3] w-full h-[50%] justify-center relative">
        <img
          className="flex rounded-t-lg aspect-[4/3]"
          src={city.imgUrl}
          alt={`${city.name} photo`}
        />
        <div className=" absolute top-2 right-2 z-10 flex flex-col w-[10%] gap-2 justify-center items-center ">
          <button className="flex justify-center p-2 bg-amber-500 min-w-8 w-full rounded-xl">
            {modify}
          </button>
          <button className="btn-exit" onClick={() => handleRemove(city.id)}>
            X
          </button>
        </div>
      </div>
      <div className="relative flex flex-col justify-between items-center ">
        <h2 className="p-2 flex justify-center font-extrabold">{city.name}</h2>
        <p className="p-2 flex justify-center text-center h-fit">
          {city.description.length > 100
            ? `${city.description.slice(0, 78)}... 
        Continua a leggere`
            : city.description}
        </p>
        <p className="p-2 flex font-extrabold justify-center">
          {city.isVisited ? "visitata" : "non visitata"}
        </p>
        <p className="p-2 flex font-extrabold justify-center">{city.id}</p>
      </div>
    </div>
  );
}

export default CityCard;
