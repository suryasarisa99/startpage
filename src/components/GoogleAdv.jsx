import { formToJSON } from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Acc2 from "./Acc2";
import { useContext, useState } from "react";
import DataContext from "../../context/DataContext";
export default function GoogleAdv() {
  let { setAdv, adv, sEngines, selectSE } = useContext(DataContext);
  const [isClosing, setIsClosing] = useState(false);
  let [fileType, setFileType] = useState(0);
  let [duration, setDuration] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fileTypes[fileType]);
    console.log(UploadDate[duration]);
    let exact = e.target.exact.value.trim();
    let all = e.target.all.value.trim();
    let any = e.target.any.value.trim().split(" ").join(" OR ");
    let none = e.target.none.value.trim().split(" ").join(" -");
    none = none ? "-" + none : "";
    console.log(none);
    console.log(any);
    let file = fileType > 0 ? "filetype:" + fileTypes[fileType] : "";
    let str = `${all} ${any} ${exact && '"' + exact + '"'} ${none} ${file}`;
    open(sEngines[selectSE].href.replace("%s", str));
  };
  return (
    <motion.div
      className="google-adv"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      // transition={{ delay: "0.2" }}
      exit={{ y: "130%" }}
      key="hi"
    >
      <form action="" onSubmit={handleSubmit}>
        <div className="row">
          <div className="label">file type</div>
          <Acc2
            data={fileTypes}
            state={{ selected: fileType, setSelected: setFileType }}
          />
        </div>
        <div className="row">
          <div className="label">Duration</div>
          <Acc2
            data={UploadDate}
            state={{ selected: duration, setSelected: setDuration }}
          />
        </div>
        <div className="field">
          <p>All These Words</p>
          <input type="text" name="all" />
        </div>{" "}
        <div className="field">
          <p>Exact Word or Prase</p>
          <input type="text" name="exact" />
        </div>
        <div className="field">
          <p>Any of These Words</p>
          <input type="text" name="any" />
        </div>
        <div className="field">
          <p>None Of These Words</p>
          <input type="text" name="none" />
        </div>
        <div
          className="icon-outer"
          onClick={() => {
            setAdv(false);
          }}
        >
          <FaChevronDown className="icon" />
        </div>
        <div className="center">
          <button className="adv-search">Search</button>
        </div>
      </form>
    </motion.div>
  );
}

let UploadDate = [
  "Anytime",
  "Last hour",
  "Today",
  "This week",
  "This month",
  "This Year",
];
let fileTypes = ["any", "ps", "pdf", "xls", "ppt", "doc"];
