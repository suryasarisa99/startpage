import Acc2 from "./Acc2";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import DataContext from "../../context/DataContext";
export default function YtAdv() {
  let { setAdv } = useContext(DataContext);
  let [sortBy, setSortBy] = useState(0);
  let [duration, setDuration] = useState(0);
  let [type, setType] = useState(0);
  let [uploadDate, setUploadDate] = useState(0);
  return (
    <motion.div
      class="yt-adv"
      initial={{ y: "120%" }}
      animate={{ y: 0 }}
      exit={{ y: "220%" }}
      key="yt-adv"
    >
      <form action="">
        <div>
          <div className="row">
            <div className="label">Sort by</div>{" "}
            <Acc2
              data={SortBy}
              state={{ selected: sortBy, setSelected: setSortBy }}
            />
          </div>
          <div className="row">
            <div className="label">Type</div>
            <Acc2
              data={Type}
              state={{ selected: type, setSelected: setType }}
            />
          </div>
          <div className="row">
            <div className="label">Upload Date</div>
            <Acc2
              data={UploadDate}
              state={{ selected: uploadDate, setSelected: setUploadDate }}
            />
          </div>
          <div className="row">
            <div className="label">Duration</div>
            <Acc2
              data={Duration}
              state={{ selected: duration, setSelected: setDuration }}
            />
          </div>

          <div className="center">
            <button className="adv-search">Search</button>
          </div>

          <div
            className="icon-outer"
            onClick={() => {
              setAdv(false);
            }}
          >
            <FaChevronDown className="icon" />
          </div>
        </div>
      </form>
    </motion.div>
  );
}

let SortBy = ["Relevance", "Upload Date", "View Count", "Rating"];
let Type = ["All", "Video", "Channel", "Playlist", "Movie"];
let UploadDate = [
  "Anytime",
  "Last hour",
  "Today",
  "This week",
  "This month",
  "This Year",
];
let Duration = ["Any", "under 4 minutes", "4-20 minutes", "Over 20 minutes"];
