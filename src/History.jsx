import { useContext } from "react";
import DataContext from "../context/DataContext";
import HistoryComponent from "./components/HistoryComponent";
export default function History() {
  let { searchTerm, history, sEngines, selectSE } = useContext(DataContext);
  return (
    <div>
      {Object.entries(history).map(([label, value], index) => {
        if (typeof value === "object")
          return <HistoryComponent data={value} label={label} index={index} />;
      })}
    </div>
  );
}
