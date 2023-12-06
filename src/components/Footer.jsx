import React from 'react'
import {Link} from 'react-router-dom';
import './../css/footer.css'

import linke from '../aseets/linke.svg'


export default function Footer() {
  return (
    <footer className='bg-dark fixed-bottom '>
        <div className='container-footer text-center '>
          <div></div>
            <div>🚀 Power by Javier Chavarria 🚀</div>
            <div>
              <Link to='https://www.linkedin.com/in/javier-chavarria-78a538205/' target='_blank'><img src={linke} alt=''/></Link>
            </div>
        </div>
    </footer>
  )
}
