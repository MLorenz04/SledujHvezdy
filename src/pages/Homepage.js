import { MainPage } from "../templates/MainPage";
import { Sidebar } from "../templates/Sidebar";
export default function Homepage() {
  return (
    <div className="main">
      <MainPage></MainPage>
      <Sidebar />
    </div>
  );
}
