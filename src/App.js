import { useState, useEffect } from 'react'
import Header from './Components/Header/'
import MainCarousel from './Components/MainCarousel/'
import { fetchingMovie } from './Components/Services/'
import './App.css'

function App() {
  const [nowPlaying, setNowPlaying] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      const fetchMv = await fetchingMovie()
      setNowPlaying(fetchMv.results)
    }
    fetchAPI()
  }, [])

  return (
    <div className="Movie-App">
      <Header />
      <main>
        <MainCarousel movieNowPlaying={nowPlaying} />
      </main>
    </div>
  );
}

export default App;
