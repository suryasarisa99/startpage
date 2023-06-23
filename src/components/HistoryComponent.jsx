import Acc2 from "./Acc2";
import { useState } from "react";
export default function HistoryComponent({ label, data, index }) {
  let [a, setA] = useState(-1);
  console.log(data);
  return (
    <div className="history-type">
      <Acc2
        label={label}
        data={data}
        state={{ selected: a, setSelected: setA }}
      />
      {/* <div className="history-type-head">{label}</div>
      {typeof data === "object" &&
        data?.map((item, ind) => {
          return <div className="history-type-item">{item}</div>;
        })} */}
    </div>
  );
}
