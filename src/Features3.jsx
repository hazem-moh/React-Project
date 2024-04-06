import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Features3() {
    return (
        <div className="features bg-SectionCol py-20">
            <div className="container mx-auto grid sm:grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-6 ">
                <div className="feat text-center">
                <FontAwesomeIcon icon={faFire} className="fa-solid fa-bolt text-4xl text-mainColor mb-3"/>
                    <h3 className="font-bold my-3 text-xl">We Will Do All The Work</h3>
                    <p className="text-paraColor text-xs">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                </div>
                <div className="feat text-center">
                <FontAwesomeIcon icon={faFire} className="fa-solid fa-bolt text-4xl text-mainColor mb-3"/>
                    <h3 className="font-bold my-3 text-xl">We Will Do All The Work</h3>
                    <p className="text-paraColor text-xs">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit
                    </p>
                </div>
                <div className="feat text-center">
                <FontAwesomeIcon icon={faFire} className="fa-solid fa-bolt text-4xl text-mainColor mb-3"/>
                    <h3 className="font-bold my-3 text-xl">We Will Do All The Work</h3>
                    <p className="text-paraColor text-xs">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Features3;