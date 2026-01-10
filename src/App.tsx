import { BrowserRouter, Route, Routes } from "react-router";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";
import PageComponents from "./pages/page-components";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<PageHome />} />
        </Route>
        <Route path="/components" element={<PageComponents />} />
      </Routes>
    </BrowserRouter>
  );
}
