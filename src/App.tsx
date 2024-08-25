import { Route, Routes } from 'react-router';
import './App.scss';
import Main from './pages/main/Main';
import WordsAdd from './pages/words-add/Words-add';
import KnowledgeTest from './pages/knowledge-test/Knowledge-test';
import Results from './pages/results/Results';
import Statistic from './pages/statistic/Statistic';

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/words-add" element={<WordsAdd />} />
        <Route path="/knowledge-test" element={<KnowledgeTest />} />
        <Route path="/results" element={<Results />} />
        <Route path="/statistic" element={<Statistic />} />
      </Routes>
    </main>
  );
}

export default App;
