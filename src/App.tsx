import { Route, Routes } from 'react-router';
import './App.scss';
import Main from './pages/main/Main';
import WordsAdd from './pages/words-add/Words-add';
import KnowledgeTest from './pages/knowledge-test/Knowledge-test';

function App() {
	return (
		<main className="app">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/words-add" element={<WordsAdd />} />
				<Route path="/knowledge-test" element={<KnowledgeTest />} />
			</Routes>
		</main>
	);
}

export default App;
