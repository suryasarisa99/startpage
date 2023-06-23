import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
export default function Acc2({ data, state: { selected, setSelected } }) {
  let [accState, setAccState] = useState(false);
  // let [selected, setSelected] = useState(0);
  let accRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (accRef.current && !accRef.current.contains(e.target)) {
        setAccState(false);
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(data.url.replace("%s", e.target.urlSub.value));
  };
  return (
    <div className="acc acc2" ref={accRef}>
      <div
        className="acc-head"
        onClick={() => setAccState((prvState) => !prvState)}
      >
        <p className="label">{data[selected]}</p>
        {accState ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {accState && (
        <div className="acc-body">
          {data.map((link, index) => {
            return (
              <div
                rel="stylesheet"
                href={link.href}
                key={link.label + index}
                onClick={() => {
                  setSelected(index);
                  setAccState(false);
                }}
              >
                {/* <i className="fa-brands fa-github"></i> */}
                {link}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
