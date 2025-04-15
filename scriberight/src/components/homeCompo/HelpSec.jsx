import React from 'react'

export default function HelpSec() {
    return (

        <section className="help-sec">
            <div className="help-div">
                <div className="help-1">
                    <div className="help-head">
                        <p>We are here to help you</p>
                    </div>
                    <div className="help-desc">
                        <p>Still have question or queires that are left unanswered?share your thought below which help us improve our website experince</p>
                    </div>
                    <div className="help-form">
                        <form action="">
                            <input type="text" blankspace="hi" placeholder="Enter Name" size="32"></input><br></br>

                                <input type="number" placeholder="Enter Mobile Number" size="32"></input><br></br>

                                    <input type="text" placeholder="Type your Message"></input>
                                </form>
                            </div>
                            <div className="help-submit">
                                <button type="submit">
                                    Send Query
                                </button>
                            </div>
                    </div>
                    <div className="help-2">
                        <img src="feedback1.svg" alt=""></img>
                    </div>
                </div>
        </section>

    )
}
