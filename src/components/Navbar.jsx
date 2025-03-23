import logo from '../assets/logoPb3.png'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6 '>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-10' src={logo} alt='logo' />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href='https://www.linkedin.com/in/presiyan-bankov' target='_blank'>
          <FaLinkedin />
        </a>
        <a href='https://github.com/PreZko' target='_blank'>
          <FaGithub />
        </a>
        <a href='https://www.instagram.com/__presko__/' target='_blank'>
          <FaInstagram />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
