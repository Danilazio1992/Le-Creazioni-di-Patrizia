import {
  LiaAtSolid,
  LiaMapMarkerAltSolid,
  LiaPhoneAltSolid,
  LiaWhatsapp,
} from "react-icons/lia";
import logo from "../assets/logo.png";
const OurBusiness = [
  "Chi Siamo",
  "Condizioni di Vendita",
  "termini e condizioni d'uso",
  "Diritto di Recesso",
  "Spedizione e Pagamenti",
  "Domande Frequenti (FAQ)",
  "Contattaci",
];

export default function Footer() {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-row p-4 h-fit w-full text-amber-950 bg-[#fff8f1] justify-center gap-80">
        <div className="flex flex-col h-full">
          <img className="flex w-48" src={logo} alt="" />
          <div className="flex flex-col p-2 h-fit">
            <h1 className=" text-xl p-2 font-extrabold">Contatti</h1>
            <div className="flex items-center gap-1 h-full w-full">
              <LiaPhoneAltSolid className=" text-amber-950" />
              <label className=" font-bold">Telefono:</label>
              <a href="tel:+393398089996"> +393398089996</a>
            </div>
            <div className="flex items-center gap-1">
              <LiaWhatsapp className=" text-amber-950" />
              <label className=" font-bold">whatsapp:</label>
              <a href="https://wa.me/393398089996">+393398089996</a>
            </div>
            <div className="flex items-center gap-1">
              <LiaMapMarkerAltSolid className=" text-amber-950" />
              <label className=" font-bold">Dove siamo</label>
            </div>
            <div className="flex items-center gap-1">
              <LiaAtSolid className=" text-amber-950" />
              <label className=" font-bold">Email</label>
              <a href="mailto:info@lecreazionidipatrizia.it">
                info@lecreazionidipatrizia.it
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 h-full ">
          <h1 className=" text-2xl p-2 font-extrabold">La Nostra Azienda</h1>
          <ul className="flex flex-col">
            {OurBusiness.map((el, i) => (
              <li key={i} className="p-2 flex">
                <p className=" cursor-pointer hover:text-blue-600 hover:font-bold ">
                  {el}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <p className="flex justify-center">PROVA</p>
      </div>
      <div className="flex justify-center items-center h-24 text-amber-950">
        <p>{`© Copyright 2025 – “Le Creazioni di Patrizia” | P.IVA IT 00000000000
Sito web gestito da TNT TECH SPA`}</p>
      </div>
    </div>
  );
}
