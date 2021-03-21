import logo from '../../logo.svg';
import { BiSearchAlt } from 'react-icons/bi'
import { BsFillGridFill } from 'react-icons/bs'

export default function Header() {
   return (
      <header className="Movie-App-header">
         <div className="wrapper">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="Movie-App-Searchbar">
               <div className="group-field">
                  <svg className="videoIcon" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M16 0L18 4H15L13 0H11L13 4H10L8 0H6L8 4H5L3 0H2C0.895 0 0.00999999 0.895 0.00999999 2L0 14C0 15.105 0.895 16 2 16H18C19.105 16 20 15.105 20 14V0H16Z" fill="white" fillOpacity="0.17" />
                  </svg>
                  <BiSearchAlt className="searchBtn" />
                  <input type="text" placeholder="Find Movie" />
               </div>
            </div>

            <ul className="Movie-App-Navigation">
               <li>
                  <BsFillGridFill />
                  <a
                     className="Movie-App-link"
                     href="https://reactjs.org"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Categories
              </a>

               </li>
               <li>
                  <a
                     className="Movie-App-link"
                     href="https://reactjs.org"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Movies
              </a>

               </li>
               <li>
                  <a
                     className="Movie-App-link"
                     href="https://reactjs.org"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     TV Shows
              </a>
               </li>
               <li>
                  <a
                     className="Movie-App-link"
                     href="https://reactjs.org"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Login
              </a>
               </li>
            </ul>

         </div>
      </header>
   )
}
