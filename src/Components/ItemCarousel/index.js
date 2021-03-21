import { FaStar } from 'react-icons/fa'
import Slider from 'react-slick'

export default function ItemCarousel({ movieItem }) {
   let settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      centerMode: true,
      speed: 500,
      arrows: false,
      variableWidth: true
   };
   const posterUrl = 'https://image.tmdb.org/t/p/original/';

   return (
      <Slider className="mainHero" {...settings}>
         {
            movieItem.map(item => {
               return (
                  <div className="item" key={item['id']}>
                     <div className="content-item">
                        <img src={posterUrl + item.poster_path} alt={item.original_title} />
                        <article>
                           <div className="rate">
                              <FaStar />
                              <span>{item['vote_average']}</span>
                           </div>
                           <strong>{item.original_title}</strong>
                           <ul>
                              <li>{item.release_date.substr(0, 4)}</li>
                              <li>Sci-Fi</li>
                           </ul>
                           <p>{item.overview.substr(0, 200)}</p>
                        </article>
                     </div>
                  </div>
               )
            })
         }
      </Slider >
   )
}
