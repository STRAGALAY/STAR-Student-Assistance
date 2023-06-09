import styled from "styled-components";

const HEADER_COLOUR = "#1e2530";
const HEADER_HEIGHT = "7vh";

/**
 * Styling for the dashboard and note category pages.
 * They are reusable to make future pages using a similar page format
 * to the note pages.
 */

//
// ----------- header styles -------------------
//

export const AdminProjectHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${HEADER_HEIGHT};
  background-color: ${HEADER_COLOUR};
  color: white;
`;

export const ProjectName = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  margin-left: 6rem;
`;

//
// editor sidebar styles ---------------------------------
//

export const ProjectEditorSidebar = styled.section`
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: calc(100vh - ${HEADER_HEIGHT});
  background-color: #27303c;
  color: white;
`;

//
// width adjustor --------------------------------
//

export const WidthAdjustor = styled.div`
  width: 0.8vw;
  background-color: lavender;
  border-radius: 0.1rem;
  &:hover {
    cursor: ew-resize;
  }
`;

//
// right side editor --------------------------------------
//

export const ProjectEditorContainer = styled.section`
  overflow-y: scroll;
  width: 100%;
  padding: 1rem;
`;

export const AdminProjectEditorContainer = styled.div`
  display: flex;
  background-color: whitesmoke;
  height: calc(100vh - ${HEADER_HEIGHT});
  .width-adjustor {
    width: 0.8vw;
    background-color: ${HEADER_COLOUR};
    &:hover {
      cursor: ew-resize;
    }
  }
`;

export const MetadataFormContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const MetadataInput = styled.div`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  > * {
    width: 60vw !important;
  }
  /* when the inputs' width is set, imgs are affected too */
  /* this fixes the images afterwards */
  img {
    width: 20px !important;
  }
`;

export const InputErrorHelper = styled.span`
  display: inline;
  font-size: inherit;
  color: red;
`;
