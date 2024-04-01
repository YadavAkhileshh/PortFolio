import logo from "../assets/projects/logoprofile.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" style={{ width: '100px', height: 'auto' }}/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/yakhilesh/" target="_blank">

            <FaLinkedin/>
            </a>
            < a href="https://github.com/yakhilgithub" target="_blank" >
             <FaGithub/>
              </a>  
              <a href="https://www.instagram.com/akhilyadav_019/" target="_blank">
            <FaInstagram/>
                </a>   
                <a href="https://twitter.com/AkhileshYa81085" target="_blank">
            <FaSquareXTwitter />
                  </a>      
        </div>
    </nav>
  );
};

export default Navbar;