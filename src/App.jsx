import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import HerNature from "./pages/HerNature";
import LittleThings from "./pages/LittleThings";
import Gallery from "./pages/Gallery";
import BirthdayNote from "./pages/BirthdayNote";
import Final from "./pages/Final";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/nature" element={<HerNature />} />
        <Route path="/little-things" element={<LittleThings />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/note" element={<BirthdayNote />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
