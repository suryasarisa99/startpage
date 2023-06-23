import { useState, useEffect, useRef, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DataContext from "../../context/DataContext";
// import { BiLogoBing } from "react-icons/bi";
export default function Search() {
  let { setSelectedSE, selectSE, adv, setAdv, sEngines } =
    useContext(DataContext);
  const handleSubmit = (e) => {
    window.open(sEngines[selectSE].href.replace("%s", e.target.search.value));
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
        <input type="text" name="search" ref={searchRef} />
      </form>
    </div>
  );
}
