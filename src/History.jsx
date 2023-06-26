import { useContext } from "react";
import DataContext from "../context/DataContext";
import HistoryComponent from "./components/HistoryComponent";
import HistoryPopup from "./components/HistoryPopup";

export default function History() {
  let { searchTerm, history, sEngines, selectSE } = useContext(DataContext);
  return (
    <div className="history-item">
      {sEngines.map((sengine, ind) => {
        // console.log(history);
        console.log(sengine.label + ": " + history?.[sengine?.label]);
        if (history?.[sengine?.label])
          return (
            <HistoryComponent
              key={sengine?.label + ind}
              // label={sengine.label} // passing label name like Google, Youtube
              sengine={sengine}
              data={history?.[sengine?.label]} // passing array of history
              index={ind}
            />
          );
      })}
    </div>
  );
}
