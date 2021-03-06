// const apiKey = process.env.REACT_APP_MOVIE_KEY;
const apiKey = '0481fd586588c927545214e69384cad2';
const url = 'https://api.themoviedb.org/3';
const nowPlay = `${url}/movie/now_playing`

export const fetchingMovie = async () => {
   try {
      const resultData = await fetch(`${nowPlay}?api_key=${apiKey}`)
      const data = await resultData.json()
      return data

      // const posterUrl = 'https://image.tmdb.org/t/p/original/';

   } catch (error) { return false }
}
