import { useLocation } from "react-router";

export default function NoteGroup() {
  const location = useLocation();

  return (
    <div>
      <h1>Note Group</h1>
      {location.pathname}
    </div>
  );
}
