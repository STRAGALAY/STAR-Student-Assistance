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

const AUTOSAVE_SECONDS_INTERVAL = 3;

export default function NoteCategory() {
  const [noteCategory, setNoteCategory] = useState(null);
  const { notesCategories } = useNotes();

  const [mde, setMde] = useState(null);
  const [noteBodyHelperMsg, setBlogBodyHelperMsg] = useState("");

  const params = useParams();

  // update post with url params
  useEffect(() => {
    if (params.category == null) return;

    const note = notesCategories.find((note) => note.id === router.query.id);
    setNoteCategory(note);
    reset({ ...note });
    setTags(note.tags);
  }, [router.query.id]);

  const saveProject = (extraAttributes) => {
    const updatedProjects = notesCategories.map((project) => {
      if (project.id !== router.query.id) return project;

      const updatedProject = {
        ...noteCategory,
        body: mde.value(),

        ...extraAttributes,
      };

      setNoteCategory(updatedProject);
      return updatedProject;
    });

    setBlogTemplates(updatedProjects);
  };

  // auto save project details
  useEffect(() => {
    let interval = setInterval(() => {
      saveProject();
    }, AUTOSAVE_SECONDS_INTERVAL * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [saveProject, noteCategory]);

  if (noteCategory == null) return <h1>Error: Can&apos;t find the note</h1>;
  return (
    <BlogProjectEditorContainer>
      <AdminProjectHeader>
        {/* TODO: extract inline css later () */}
        <section style={{ display: "flex", alignItems: "center" }}>
          <Button onClick={() => alert("Coming soon")}>Menu</Button>
          <Button>
            <SeeProjectsLink href="/resources/admin">Dashboard</SeeProjectsLink>
          </Button>

          <ProjectName>Current project: {noteCategory.name}</ProjectName>
        </section>

        {/* also extract this css later */}
        <section style={{ marginRight: "20rem" }}>
          <Button onClick={handleSubmit(handleSubmitBlog)}>Publish</Button>
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
            <MDEditor
              placeholderText={"## Space starts here\n\nand ends here"}
              mdeRecordSetter={setMde}
              initialValue={noteCategory.body}
            />
            <InputErrorHelper>{noteBodyHelperMsg}</InputErrorHelper>
          </MetadataFormContainer>

          {/* <p>End</p> */}
        </ProjectEditorContainer>
      </AdminProjectEditorContainer>
    </BlogProjectEditorContainer>
  );
}

// Template for changes to page container styles
const BlogProjectEditorContainer = styled.div`
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
