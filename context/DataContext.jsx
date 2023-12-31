import { createContext, useState, useEffect } from "react";
import {
  FaYoutube,
  FaGoogle,
  FaTwitter,
  FaYahoo,
  FaInstagram,
} from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

import { SiDuckduckgo, SiMicrosoftbing } from "react-icons/si";
let DataContext = createContext();

function DataProvider({ children }) {
  let [selectSE, setSelectedSE] = useState(0);
  let [adv, setAdv] = useState(false);
  let [sEngines, setSEngines] = useState(s);
  let [history, setHistory] = useState({});
  let [searchTerm, setSearchTerm] = useState("");
  let [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    let index = localStorage.getItem("seIndex");
    setSelectedSE(index || 0);
    setHistory(
      JSON.parse(localStorage.getItem("history")) || {
        Youtube: ["hi youtube"],
        Google: [],
      }
    );
    // localStorage.setItem("history", JSON.stringify("{}"));
  }, []);
  return (
    <DataContext.Provider
      value={{
        selectSE,
        setSelectedSE,
        adv,
        setAdv,
        sEngines,
        setSEngines,
        history,
        setHistory,
        searchTerm,
        setSearchTerm,
        showHistory,
        setShowHistory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
export { DataProvider };
let s = [
  {
    href: "https://www.google.com/search?q=%s",
    label: "Google",
    logo: <FaGoogle />,
  },
  {
    href: "https://www.youtube.com/results?search_query=%s",
    label: "Youtube",
    logo: <FaYoutube />,
  },
  {
    href: "https://www.bing.com/search?q=%s",
    logo: <SiMicrosoftbing />,
    label: "Bing",
  },
  {
    href: "https://www.instagram.com/%s",
    logo: <FaInstagram />,
    label: "Instagram",
  },
  {
    href: "https://duckduckgo.com/?q=%s",
    logo: <FaYahoo />,
    label: "Yahoo",
  },
  {
    href: "https://duckduckgo.com/?q=%s",
    logo: <SiDuckduckgo />,
    label: "Duck Duck Go",
  },
];
