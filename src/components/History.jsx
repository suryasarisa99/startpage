import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import DataContext from "../../context/DataContext";
export default function History() {
  let { history, sEngines, selectSE, searchTerm, showHistory, setShowHistory } =
    useContext(DataContext);
  console.log(sEngines[selectSE].label);
  const historyRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (historyRef.current && !historyRef.current.contains(e.target))
        setShowHistory(false);
    });
  });
  return (
    <div>
      {showHistory && (
        <motion.div className="history" ref={historyRef}>
          {searchTerm.length > 0 &&
            history?.[sEngines[selectSE].label]
              ?.filter((item) =>
                item.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((filteredItem, index) => (
                <div
                  key={filteredItem + index}
                  className="history-item"
                  onClick={() => {
                    console.log("clicked history item");
                    window.open(
                      sEngines[selectSE].href.replace("%s", filteredItem)
                    );
                  }}
                >
                  <p>{filteredItem}</p>
                </div>
              ))}
        </motion.div>
      )}
    </div>
  );
}
