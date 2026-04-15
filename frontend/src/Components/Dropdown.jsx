import { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [secondOption, setSecondOption] = useState(false);
  const options = ["Opzione 1", "Opzione 2", "Opzione 3"];
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleEnter = (e) => {
    setHovered(option);
    setIdHovered(+e.currentTarget.id);
  };
  const handleLeave = () => {
    setHovered(false);
    setIdHovered(-1);
  };

  return (
    <div className="relative inline-block bg-amber-300">
      <button onClick={toggleDropdown} className="">
        {selectedOption ? selectedOption : "Seleziona..."}
      </button>
      {isOpen && (
        <ul className="absolute top-[100%] left-0 border border-solid list-none p-2.5 bg-amber-950">
          {options.map((option, index) => (
            <li
              key={index}
              className="relative"
              onClick={() => handleOptionClick(option)}
              onMouseEnter={() => setIsHovered(option)}
            >
              {" "}
              {option}
              {option === isHovered ? (
                <ul className="absolute left-[110%]  top-0 border border-solid list-none p-2.5 bg-amber-950">
                  <li>si</li>
                  <li>no</li>
                  <li>forse</li>
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;

let ProductList = [
  {
    ID: "210943712540987",
    name_product: "clessidra",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates voluptatem et incidunt suscipit mollitia autem! Neque, illo temporibus sunt natus voluptatibus vero, suscipit qui quam nulla ducimus odit, consequuntur tenetur?",
    price: 3.19,
    disponibility: 34,
    category: "fermaposto",
    processing_times: 4,
    qty_sold: 456,
    download_files: [
      {
        label: "Manuale Utente (PDF)",
        url: "/files/prod123/manuale.pdf",
        size: "2 MB",
      },
      {
        label: "Scheda Tecnica",
        url: "/files/prod123/scheda.pdf",
        size: "500 KB",
      },
    ],
  },
];
