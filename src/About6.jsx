function About6() {
    return (
        <div className="about  py-20" id="About">
            <div className="container mx-auto">
                <div className="special_heading text-center">
                    <h1 className="font-extrabold text-HeadColor text-7xl md:text-9xl tracking-tighter">
                        About
                    </h1>
                    <p className="text-paraColor -mt-8">Less is more work</p>
                </div>

                <div className="sections pt-12 flex  justify-between items-center">
                    {/* <!-- start section --> */}
                    {/* <!-- <div class="image ">
                <img src="../photos/about.JPG" alt="" class="w-full " />
              </div> --> */}
                    {/* <!-- End section --> */}

                    {/* <!-- start section --> */}
                    <div className="section">
                        <div className="text ">
                            <p className="font-bold text-xl mb-9 leading-normal">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Consectetur deleniti eius sit repudiandae fuga natus ducimus
                                exercitationem. Itaque incidunt deserunt eaque, impedit
                                laboriosam animi nobis pariatur ipsum, soluta assumenda iste!
                            </p>
                            <hr className="w-1/2 bg-mainColor h-1" />
                            <p className="text-paraColor text-sm mt-9 leading-normal">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Architecto similique voluptate repellendus laborum facilis
                                pariatur porro nam facere vitae nulla eum nemo, quibusdam rerum
                                nisi, temporibus eius atque commodi obcaecati!
                            </p>
                        </div>
                    </div>
                    {/* <!-- End section --> */}
                </div>
            </div>
        </div>
    );
}
export default About6;