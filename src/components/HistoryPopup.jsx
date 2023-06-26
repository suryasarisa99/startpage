export default function HistoryPopup({ index, onOpen, onEdit, onDelete }) {
  return (
    <div className="history-popup">
      <button onClick={onOpen}>Open</button>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
