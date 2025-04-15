import React from 'react'
const imgurl=''

export default function DashBoard() {
    return (
        <div className="right-div">
        <div className="right-dash-panel">
            <div className="right-main-dash">

                <div className="dash-panel-cell">
                    <div className="cell-info">
                        <div className="cell-title-name">Patient</div>
                        <div className="cell-title-cnt">10</div>
                    </div>
                    <div className="cell-icon">
                        <img  alt="icon"></img>
                    </div>
                </div>


                <div className="dash-panel-cell">
                    <div className="cell-info">
                        <div className="cell-title-name">Schedules</div>
                        <div className="cell-title-cnt">04</div>
                    </div>
                    <div className="cell-icon"><img  alt="icon"></img></div>
                </div>

                <div className="dash-panel-cell">
                    <div className="cell-info">
                        <div className="cell-title-name">Total Patient</div>
                        <div className="cell-title-cnt">26</div>
                    </div>
                    <div className="cell-icon"><img  alt="icon"></img></div>
                </div>

                <div className="dash-panel-cell">
                    <div className="cell-info">
                        <div className="cell-title-name">Patient</div>
                        <div className="cell-title-cnt">10</div>
                    </div>
                    <div className="cell-icon"><img  alt="icon"></img></div>
                </div>
            </div>
        </div>
        </div>
    )
}
