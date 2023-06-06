import { useParams } from "react-router";
import { useEffect } from "react";

export default function NoteGroup() {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <div className="dashboard-page">
      <h1>NoteGroup</h1>
      {JSON.stringify(params)}
    </div>
  );
}
