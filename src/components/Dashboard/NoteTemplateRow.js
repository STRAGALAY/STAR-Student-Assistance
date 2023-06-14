import styled from "styled-components";
import { latestTimeAgo } from "../../utils/methods/time";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

export default function NoteTemplateRow({ note }) {
  return (
    <NoteTemplateRowWrapper>
      <NoteInformationContainer>
        <Input disabled type="checkbox" />

        <ResourceProjectTitle href={`/note/${note.id}`}>{note.name}</ResourceProjectTitle>
        <ModifiedTimeStamp>Last viewed {latestTimeAgo(note.lastSaved)} ago</ModifiedTimeStamp>
      </NoteInformationContainer>

      <NoteControlContainer>
        <Button variant="outlined" onClick={() => alert("Coming soon")}>
          Copy
        </Button>
        <Button variant="outlined" onClick={() => alert("Coming soon")}>
          Archive
        </Button>
        <Button variant="contained" color="error" onClick={() => alert("Coming soon")}>
          Trash
        </Button>
      </NoteControlContainer>
    </NoteTemplateRowWrapper>
  );
}

const NoteTemplateRowWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  min-height: 2vh;
  background-color: whitesmoke;
  margin-bottom: 0.1rem;
  padding: 0.3rem;
  color: black;
  border-left: 1px solid white;
  border-right: 1px solid white;
  overflow-x: auto;
  &:last-child {
    margin-bottom: 0;
  }
`;

const NoteInformationContainer = styled.section`
  display: flex;
  align-items: center;
  * {
    margin-right: 1.2rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const ModifiedTimeStamp = styled.div`
  font-size: 1.1rem;
`;

const NoteControlContainer = styled.section`
  display: flex;
  align-items: center;
  * {
    margin-right: 0.2rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const ResourceProjectTitle = styled.a`
  font-size: 1.2rem;
  margin-right: 4rem;
  font-weight: bold;
  color: #3e70bb;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
