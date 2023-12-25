import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop"

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Theory from "./pages/Theory";
import TheorySection from './pages/TheorySection';
import Vocabulary from "./pages/Vocabulary";
import VocabularySection from "./pages/VocabularySection";
import Reading from "./pages/Reading";
import ReadingSection from "./pages/ReadingSection";
import Listening from "./pages/Listening";
import ListeningSection from "./pages/ListeningSection";
import Authorization from "./pages/Authorization";
import Test from "./pages/Test";

function App() {
  return (
    <div>
      <Router>
      <ScrollToTop/>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/theory" element={<Theory/>}/>
          <Route path="/theory/:id" element={<TheorySection/>}/>
          <Route path="/theory/:id/test" element={<Test/>}/>
          <Route path="/vocabulary" element={<Vocabulary/>}/>
          <Route path="/vocabulary/:id" element={<VocabularySection/>}/>
          <Route path="/reading" element={<Reading/>}/>
          <Route path="/reading/:id" element={<ReadingSection/>}/>
          <Route path="/listening" element={<Listening/>}/>
          <Route path="/listening/:id" element={<ListeningSection/>}/>
          <Route path="/authorization" element={<Authorization/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
