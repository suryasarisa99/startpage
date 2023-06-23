import { useState, useEffect, useRef } from "react";
import "../../styles/acc.scss";
export default function Acc({ data }) {
  let [accState, setAccState] = useState(false);
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
    <div className="acc" ref={accRef}>
      <div
        className="acc-head"
        onClick={() => setAccState((prvState) => !prvState)}
      >
        <i className="fa-brands fa-github icon"></i>
        <p className="label">{data.title}</p>
      </div>
      {accState && (
        <div className="acc-body">
          <form action="" className="github" onSubmit={handleSubmit}>
            <input type="text" placeholder="github repo" name="urlSub" />
            <button>
              <i className="fa-brands fa-github"></i>
            </button>
          </form>
          {data.links.map((link) => {
            return (
              <a rel="stylesheet" href={link.href} key={link.label}>
                <i className="fa-brands fa-github"></i> {link.label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
