import Header from './components/Header';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {

	const [animeList, setAnimeList] = useState([]);
	const [topAnime, setTopAnime] = useState([]);
	const [search, setSearch] = useState("");

	const getTopAnime = async () => {
		const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
			.then(response => response.json());
		
		setTopAnime(temp.top.slice(0,5));
	}

	useEffect(() => {
		getTopAnime();

		
	}, [])
	console.log(topAnime);
	return (
    	<div className="App">
			<Header/>	
			<div className="content-wrap">
				<Sidebar
					topAnime={topAnime} />
				<MainContent />
			</div>
    	</div>
	
  	);
}

export default App;
