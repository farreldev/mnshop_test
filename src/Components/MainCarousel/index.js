import './style.css'
import ItemCarousel from '../ItemCarousel/'

export default function MainCarousel({ movieNowPlaying }) {
   return (
      <div className="Movie-App-Hero">
         <ItemCarousel movieItem={movieNowPlaying} />
      </div>
   )
}


{/* <div className="item">
   <div className="content-item">
      <img src="assets/images/movie1.png" alt="" />
      <article>
         <div className="rate">
            <FaStar />
            <span>7.3</span>
         </div>
         <strong>Space Sweepers</strong>
         <ul>
            <li>2021</li>
            <li>Sci-Fi</li>
         </ul>
         <p>When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.</p>
      </article>
   </div>
</div> */}