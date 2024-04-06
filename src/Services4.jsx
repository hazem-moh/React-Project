import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';





function Services4() {
    return (
        <div className="services  py-20" id="Services">
            <div className="container mx-auto">
                <div className="special_heading text-center">
                    <h1 className="font-extrabold text-HeadColor text-7xl md:text-9xl tracking-tighter ">
                        Services
                    </h1>
                    <p className="text-paraColor -mt-8">Dont be busy, be productive</p>
                </div>
                <div className="serv-content grid grid-cols-1 md:grid-cols-2 gap-9 pt-7 ">
                    <div className="col">
                        {/* <!-- start service  --> */}
                        <div className="srv text-center pt-5">
                        <FontAwesomeIcon icon={faLaptop} className="fa-solid fa-pen-nib  text-4xl text-mainColor  mb-3"/>
                            <div className="text">
                                <h3 className="font-bold text-xl">Graphic Design</h3>
                                <p className="text-paraColor pt-2">
                                    Graphic design is the process of visual communication and
                                    problem-solving using one or more of typography, photography
                                    and illustration
                                </p>
                            </div>
                        </div>
                        {/* <!-- End service  --> */}
                        {/* <!-- start service  --> */}
                        <div className="srv text-center pt-5">
                        <FontAwesomeIcon icon={faLaptop} className="fa-solid fa-tv text-4xl text-mainColor  mb-3"/>
                            <div className="text">
                                <h3 className="font-bold text-xl">UI & UX</h3>
                                <p className="text-paraColor pt-2">
                                    Process of enhancing user satisfaction with a product by
                                    improving the usability, accessibility, and pleasure provided
                                    in the interaction.
                                </p>
                            </div>
                        </div>
                        {/* <!-- End service  --> */}
                    </div>
                    <div className="col">
                        {/* <!-- start service  --> */}
                        <div className="srv text-center pt-5">
                        <FontAwesomeIcon icon={faLaptop} className="fa-solid fa-message text-4xl text-mainColor  mb-3"/>
                            <div className="text">
                                <h3 className="font-bold text-xl">Web Design</h3>
                                <p className="text-paraColor pt-2">
                                    Web design encompasses many different skills and disciplines
                                    in the production and maintenance of websites
                                </p>
                            </div>
                        </div>
                        {/* <!-- End service  --> */}
                        {/* <!-- start service  --> */}
                        <div className="srv text-center pt-5">
                        <FontAwesomeIcon icon={faLaptop} className="fa-solid fa-desktop text-4xl text-mainColor  mb-3"/>
                            <div className="text">
                                <h3 className="font-bold text-xl">Web Development</h3>
                                <p className="text-paraColor pt-2">
                                    Web development is a broad term for the work involved in
                                    developing a web site for the Internet or an intranet.
                                </p>
                            </div>
                        </div>
                        {/* <!-- End service  --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Services4;