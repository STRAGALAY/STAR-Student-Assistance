import ListItemIcon from "@mui/material/ListItemIcon";
import TemporaryDrawer from "./TemporaryDrawer";

export default function Header() {
  const something = () => {
    console.log("nice");
  };

  return (
    <header className="header">
      <TemporaryDrawer
        drawerItems={[
          { text: "asadsd", icon: ListItemIcon, onClick: () => null },
          { text: "tttttttttttt", icon: ListItemIcon, onClick: () => null },
        ]}
      />
      <div className="brand-label">STAR</div>
    </header>
  );
}

