function Portfolio5() {
    return (
        <div className="portfolio  bg-SectionCol py-20" id="portfolio">
            <div className="container  mx-auto">
                <div className="special_heading text-center">
                    <h1 className="font-extrabold text-HeadColor text-7xl md:text-9xl tracking-tighter">
                        Portfolio
                    </h1>
                    <p className="text-paraColor -mt-8">
                        If you do it right, it will last forever.
                    </p>
                </div>
                <div className="items grid grid-cols-1 md:grid-cols-3 gap-9 pt-9 ">
                    {/* <!-- start item --> */}
                    <div className="item bg-white">
                        <img src="./photos/port1.jpg" alt="" className="w-full h-52" />
                        <div className="text">
                            <h3 className="font-bold p-2">Project Here</h3>
                            <p className="p-2 text-paraColor">
                                My creative ability is very difficult to measure because it can
                                manifest in so many surprising and.
                            </p>
                        </div>
                    </div>
                    {/* <!-- End item --> */}
                    {/* <!-- start item --> */}
                    <div className="item bg-white">
                        <img src="./photos/port2.jpeg" alt="" className="w-full h-52" />
                        <div className="text">
                            <h3 className="font-bold p-2">Project Here</h3>
                            <p className="p-2 text-paraColor">
                                My creative ability is very difficult to measure because it can
                                manifest in so many surprising and.
                            </p>
                        </div>
                    </div>
                    {/* <!-- End item --> */}
                    {/* <!-- start item --> */}
                    <div className="item bg-white">
                        <img src="./photos/port3.jpeg" alt="" className="w-full h-52" />
                        <div className="text">
                            <h3 className="font-bold p-2">Project Here</h3>
                            <p className="p-2 text-paraColor">
                                My creative ability is very difficult to measure because it can
                                manifest in so many surprising and.
                            </p>
                        </div>
                    </div>
                    {/* <!-- End item --> */}
                </div>
            </div>
        </div>
    );
}
export default Portfolio5;