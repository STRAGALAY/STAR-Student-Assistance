// import { useParams } from "react-router";
// import { useEffect } from "react";

// export default function NoteGroup() {
//   const { category } = useParams();

//   useEffect(() => {
//     //
//   }, []);

//   return (
//     <div className="dashboard-page">
//       <h1>NoteGroup</h1>
//       {/* {JSON.stringify(params)} */}
//       <h2>A: {category}</h2>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import styled from "styled-components";
import MDEditor from "../MDEditor";
import {
  AdminProjectEditorContainer,
  AdminProjectHeader,
  InputErrorHelper,
  MetadataFormContainer,
  ProjectEditorContainer,
  ProjectEditorSidebar,
  ProjectName,
  WidthAdjustor,
} from "./DashboardStyling";
import { useNotes } from "../../contexts/NotesProvider";
import { useParams } from "react-router-dom/dist";
import Button from "@mui/material/Button";

const AUTOSAVE_SECONDS_INTERVAL = 3;

export default function NoteCategory() {
  const [noteCategory, setNoteCategory] = useState(null);
  const [mde, setMde] = useState(null);

  const { notesCategories, setNotesCategories } = useNotes();

  const params = useParams();

  // update post with url params
  useEffect(() => {
    if (params.id == null) return;

    const note = notesCategories.find((note) => note.id === params.id);
    setNoteCategory(note);
  }, [params.id, notesCategories]);

  const saveNote = () => {
    const updatedNotes = notesCategories.map((project) => {
      if (project.id !== params.id) return project;

      const updatedNote = {
        ...noteCategory,
        lastSaved: Date.now(),
        body: mde?.value() ?? noteCategory.body,
      };

      setNoteCategory(updatedNote);
      return updatedNote;
    });

    setNotesCategories(updatedNotes);
    console.log("saving...");
  };

  // auto save project details
  useEffect(() => {
    let interval = setInterval(() => {
      saveNote();
    }, AUTOSAVE_SECONDS_INTERVAL * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [saveNote, mde]);

  if (noteCategory == null) return <h1>Error: Can&apos;t find the note</h1>;
  return (
    <NoteCategoryEditorContainer>
      <AdminProjectHeader>
        {/* TODO: extract inline css later () */}
        <section style={{ display: "flex", alignItems: "center" }}>
          <Button variant="contained" onClick={() => alert("Coming soon")}>
            Menu
          </Button>
          <Button variant="contained">
            <SeeProjectsLink href="/resources/admin">Dashboard</SeeProjectsLink>
          </Button>

          <ProjectName>Current project: {noteCategory.name}</ProjectName>
        </section>

        {/* also extract this css later */}
        <section style={{ marginRight: "20rem" }}>
          <Button variant="contained" onClick={() => console.log("nothing will happen")}>
            Publish
          </Button>
        </section>
      </AdminProjectHeader>

      <AdminProjectEditorContainer>
        <ProjectEditorSidebar>
          <h1>h</h1>
          <div style={{ fontSize: "2rem" }}>Utility sidebar coming soon ..</div>
        </ProjectEditorSidebar>

        <WidthAdjustor onClick={() => alert("unavailable rn")} />

        <ProjectEditorContainer>
          <MetadataFormContainer>
            <PortionHeader>The Body</PortionHeader>
            <MDEditor mdeRecordSetter={setMde} initialValue={noteCategory.body} />
          </MetadataFormContainer>

          {/* <p>End</p> */}
        </ProjectEditorContainer>
      </AdminProjectEditorContainer>
    </NoteCategoryEditorContainer>
  );
}

// Template for changes to page container styles
const NoteCategoryEditorContainer = styled.div`
  /*  */
`;

const SeeProjectsLink = styled.a`
  color: inherit;
`;

const PortionHeader = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;
