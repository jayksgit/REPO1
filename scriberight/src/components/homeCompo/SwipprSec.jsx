import React from 'react'

export default function SwipprSec() {
    return (

        <section className="swiper-sec">
            <div className="swiper">

                <div className="swiper-wrapper">
                    {/* <!------------------------> */}
                    <div className="swiper-slide">

                        <div className="swipeer-img">
                            <img src="profile.jpg" alt=""></img>
                        </div>

                        <div className="swiper-desc">
                            <div className="desc-head">
                                DR. Hitesh Lad Sir
                            </div>
                            <div className="desc-para">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, ipsam?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, ex?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni debitis nulla accusamus mollitia error iste molestias officia quaerat eveniet doloremque.
                            </div>
                            {/* <!-- <span className="dsec-btn"> -->
                                <!-- <button></button> -->
                                <!-- </span> --> */}
                        </div>

                    </div>
                    {/* <!------------------------>
        <!------------------------> */}
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>

            </div>
        </section>
    )
}
