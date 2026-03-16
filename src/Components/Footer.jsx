import { AiFillTikTok } from "react-icons/ai";
import {
  LiaAtSolid,
  LiaFacebookSquare,
  LiaInstagram,
  LiaMapMarkerAltSolid,
  LiaPhoneAltSolid,
  LiaWhatsapp,
} from "react-icons/lia";
import { TfiYoutube } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useUi } from "../UiContext/uiContext";
const OurBusiness = [
  { route: "/chisiamo", text: "Chi Siamo" },
  { route: "/legal/condizioni-di-vendita", text: "Condizioni di Vendita" },
  {
    route: "/legal/termini-e-condizioni-d-uso",
    text: "termini e condizioni d'uso",
  },
  { route: "/legal/diritto-di-recesso", text: "Diritto di Recesso" },
  { route: "/legal/spedizioni-e-pagamenti", text: "Spedizioni e Pagamenti" },
  { route: "/FAQ", text: "Domande Frequenti (FAQ)" },
  { route: "/contatti", text: "Contattaci" },
];

export default function Footer() {
  const { state: uiState } = useUi();
  return (
    <footer className="main flex flex-col h-full w-full justify-center font ">
      <div className="flex max-lg:flex-col flex-row p-4 h-fit w-full text-amber-950 bg-[#fff8f1] justify-around">
        <div className="primary flex h-full items-center max-lg:flex-col  ">
          <img className="flex w-76 h-fit" src={logo} alt="" />
          <div className="flex flex-col p-2 h-fit gap-1.5">
            <h1 className=" text-xl pt-2 pb-2 font-extrabold">Contatti</h1>
            <ul className="flex flex-col gap-1">
              <li className="flex items-center gap-1 h-full w-full group relative cursor-pointer">
                <a className="flex items-center" href="tel:+393398089996">
                  <LiaPhoneAltSolid className=" text-amber-950" />
                  <label className="cursor-pointer font-bold">Telefono:</label>
                  +393398089996
                </a>
                <span className="absolute left-0 bottom-0 block h-0.5 w-[15%] bg-amber-950 transition-all duration-1000 group-hover:w-[80%]"></span>
              </li>
              <li className="flex items-center gap-1 group cursor-pointer relative">
                <LiaWhatsapp className=" text-amber-950" />
                <a href="https://wa.me/393398089996">
                  <label className="cursor-pointer font-bold">whatsapp:</label>
                  +393398089996
                  <span className="absolute left-0 bottom-0 block h-0.5 w-[15%] bg-amber-950 transition-all ease duration-1000 group-hover:w-[80%]"></span>
                </a>
              </li>
              <li className="flex items-center gap-1 group relative">
                <LiaMapMarkerAltSolid className=" text-amber-950" />
                <label className=" font-bold">Dove siamo</label>
                <span className="absolute left-0 bottom-0 block h-0.5 w-[15%] bg-amber-950 transition-all duration-1000 group-hover:w-[80%]"></span>
              </li>
              <li className="cursor-pointer flex items-center gap-1 group relative">
                <a
                  className="flex items-center"
                  href="mailto:info@lecreazionidipatrizia.it"
                >
                  <LiaAtSolid className=" text-amber-950" />
                  <label className="cursor-pointer font-bold">Email:</label>
                  info@lecreazionidipatrizia.it
                </a>
                <span className="absolute left-0 bottom-0 block h-0.5 w-[15%] bg-amber-950 transition-all duration-1000 group-hover:w-[80%]"></span>
              </li>
            </ul>
            <h1 className=" text-xl pt-2 font-extrabold">
              Seguici sui nostri Social
            </h1>
            <section className=" flex flex-row text-4xl gap-2 pt-2 ">
              <LiaFacebookSquare className="cursor-pointer text-amber-950 font-extrabold  hover:text-amber-50 hover:bg-amber-950 rounded-sm" />
              <LiaInstagram className="cursor-pointer text-amber-950 font-extrabold  hover:text-amber-50 hover:bg-amber-950 rounded-sm" />
              <LiaWhatsapp className="cursor-pointer text-amber-950 font-extrabold  hover:text-amber-50 hover:bg-amber-950 rounded-sm" />
              <AiFillTikTok className="cursor-pointer text-amber-950 font-extrabold  hover:text-[#fae5cd] hover:bg-amber-950 rounded-sm" />
              <TfiYoutube
                className="cursor-pointer p-1.5 text-amber-950 font-extrabold  hover:text-[#fae5cd] hover:bg-amber-950 rounded-sm"
                onClick={() => console.log(uiState)}
              />
            </section>
          </div>
        </div>
        <div className="secondary flex flex-col p-2 h-full max-lg:justify-center">
          <h1 className="flex text-2xl p-2 font-extrabold w-full max-lg:justify-center">
            La Nostra Azienda
          </h1>
          <ul className="flex flex-col w-full max-lg:justify-center ">
            {OurBusiness.map((el, i) => (
              <NavLink
                to={`${el.route}`}
                key={i}
                className="p-1 flex max-lg:justify-center"
              >
                <p className="flex cursor-pointer hover:font-bold ">
                  {el.text}
                </p>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="secondary flex flex-col p-2 h-full max-lg:justify-center">
          <h1 className="flex text-2xl p-2 font-extrabold w-full max-lg:justify-center">
            Iscriviti alla nostra NewsLetter
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center h-16 text-amber-950">
        <p>{`© Copyright 2025 – “Le Creazioni di Patrizia” | P.IVA IT 00000000000
Sito web gestito da TNT TECH SPA`}</p>
      </div>
    </footer>
  );
}
