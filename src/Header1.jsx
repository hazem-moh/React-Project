import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'




function Header1() {


    return (
        <div className="header py-3 ">
            <div className="container mx-auto flex justify-between items-center relative sm:px-3">
                <img className="logo w-20" src="../photos/logo.png" alt="" />
                <div className="links ">
                    <span className="icon">
                        <FontAwesomeIcon icon={faBars}  className="fa-solid fa-bars md:hidden text-xl block "/>
                    </span>
                    <ul className="hidden gap-4 md:flex">
                        <li className=" block text-paraColor hover:bg-secColor hover:text-white p-3 rounded transition duration-200">
                            <a href="#Services" className="block">
                                Services
                            </a>
                        </li>
                        <li className=" block text-paraColor hover:bg-secColor hover:text-white p-3 rounded transition duration-200">
                            <a href="#portfolio" className="block">
                                portfolio
                            </a>
                        </li>
                        <li className=" block text-paraColor hover:bg-secColor hover:text-white p-3 rounded transition duration-200">
                            <a href="#About" className="block">
                                About
                            </a>
                        </li>
                        <li className=" block text-paraColor hover:bg-secColor hover:text-white p-3 rounded transition duration-200">
                            <a href="#Contact" className="block">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Header1;
