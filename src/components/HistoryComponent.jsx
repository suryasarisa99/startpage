import Acc2 from "./Acc2";
import { useState, useEffect, useContext } from "react";
import DataContext from "../../context/DataContext";
import HistoryPopup from "./HistoryPopup";
export default function HistoryComponent({ sengine, data: d, index }) {
  let { history, setHistory } = useContext(DataContext);
  let [selected, setSelected] = useState(-1);
  let [showPopup, setShowPopup] = useState(false);
  let [data, setData] = useState(d);
  let fromatedLabel = (
    <div>
      {sengine.logo} {sengine.label}
    </div>
  );
  useEffect(() => {
    if (selected >= 0) {
      setShowPopup(true);
    }
  }, [selected]);

  const onOpen = (e) => {
    let x = sengine.href.replace("%s", data[selected]);
    console.log(x);
    open(x);
    setSelected(-1);
    setShowPopup(false);
  };
  const onDelete = () => {
    data.splice(selected, 1);
    setShowPopup(false);
    setSelected(-1);
    setData([...data]);
    history[sengine] = data;
    setHistory({ ...history });
    localStorage.setItem("history", JSON.stringify(history));
  };
  const onEdit = () => {};
  return (
    <div className="history-type">
      {showPopup && (
        <HistoryPopup onOpen={onOpen} onEdit={onEdit} onDelete={onDelete} />
      )}
      <Acc2
        label={fromatedLabel}
        data={data}
        state={{ selected, setSelected }}
      />
    </div>
  );
}
