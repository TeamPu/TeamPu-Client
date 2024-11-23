import HomePage from "./pages/HomePage";
import SideNavBar from "./containers/SideNavBar";

export default function App() {
  return (
    <div className="flex h-screen w-screen">
      <SideNavBar />
      <HomePage />
    </div>
  );
}
