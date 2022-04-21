import "./App.css";
import DataTable from "./components/DataTable";
import Navbar from "./components/Navbar";
import SecondaryNavbar from "./components/SecondaryNavbar";
import Sidebar from "./components/Sidebar";
import "@mdi/font/css/materialdesignicons.css";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Sidebar />
      <Navbar />
      <SecondaryNavbar />
      <DataTable />
    </div>
  );
}

export default App;
