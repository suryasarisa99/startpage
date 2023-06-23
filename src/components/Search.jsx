import { useState, useEffect, useRef, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DataContext from "../../context/DataContext";
// import { BiLogoBing } from "react-icons/bi";
import History from "./History";
export default function Search() {
  let {
    setSelectedSE,
    setHistory,
    history,
    selectSE,
    adv,
    setAdv,
    selectedSE,
    sEngines,
    searchTerm,
    setSearchTerm,
    showHistory,
    setShowHistory,
  } = useContext(DataContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(sEngines[selectSE].href.replace("%s", e.target.search.value));
    let temp = { ...history };
    if (temp[sEngines[selectSE].label])
      temp?.[sEngines[selectSE].label].push(e.target.search.value);
    else temp[sEngines[selectSE].label] = [e.target.search.value];
    console.log(temp);
    // Unique Elements
    const uniqueSet = new Set(
      temp[sEngines[selectedSE].label].map((element) => element.toLowerCase())
    );
    return;
    temp[sEngines[selectedSE].label] = Array.from(uniqueSet);
    // unique End
    setHistory(temp);
    localStorage.setItem("history", JSON.stringify(temp));
  };
  let [showSE, setShowSE] = useState(false);
  let SEsRef = useRef(null);
  let searchRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (SEsRef.current && !SEsRef.current.contains(e.target))
        setShowSE(false);
    });
  }, []);
  return (
    <div className="search">
      <History />

      <div className="tools">
        {(selectSE == 0 || selectSE == 1) && !showSE && !adv && (
          <button className="adv-search-tag" onClick={() => setAdv(true)}>
            adv
          </button>
        )}
      </div>
      <AnimatePresence>
        {showSE && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "140%" }}
            className="s-es"
            ref={SEsRef}
          >
            {sEngines.map((se, index) => {
              return (
                //   <div className="s-es">
                <div
                  className="s-e"
                  onClick={() => {
                    setSelectedSE(index);
                    setShowSE(false);
                    setAdv(false);
                    // searchRef.current.focus();

                    localStorage.setItem("seIndex", index);
                  }}
                >
                  <div className="s-e-logo">{se.logo}</div>
                  <div className="s-e-label">{se.label}</div>
                  {/* </div> */}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit}>
        {/* <button>{createElement(sEngines[selectSE].logo, null)}</button> */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowSE((prv) => !prv);
            // searchRef.current.focus();
          }}
          type="button"
        >
          {sEngines[selectSE].logo}
        </button>
        <input
          type="text"
          name="search"
          value={searchTerm}
          autoComplete="off"
          autoCapitalize="off"
          onChange={(e) => {
            if (!showHistory) setShowHistory(true);
            setSearchTerm(e.target.value);
          }}
          ref={searchRef}
        />
      </form>
    </div>
  );
}
