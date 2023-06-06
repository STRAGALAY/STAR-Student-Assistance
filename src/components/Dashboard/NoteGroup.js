import { useParams } from "react-router";
import { useEffect } from "react";

export default function NoteGroup() {
  const { category } = useParams();

  useEffect(() => {
    //
  }, []);

  return (
    <div className="dashboard-page">
      <h1>NoteGroup</h1>
      {/* {JSON.stringify(params)} */}
      <h2>A: {category}</h2>
    </div>
  );
}
