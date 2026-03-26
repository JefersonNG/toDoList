import { BrowserRouter, Routes, Route } from "react-router";
import PageComponents from "./pages/page-components";
import LayoutMain from "./components/layout-main";
import PageHome from "./pages/page-home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/components" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
