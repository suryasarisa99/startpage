import History from "./History";
import { useNavigate } from "react-router-dom";
export default function Settings() {
  let navigate = useNavigate();
  return (
    <div>
      <p>Settings</p>
      <button
        className="settings-options history-btn"
        onClick={() => navigate("/history")}
      >
        History
      </button>
    </div>
  );
}
