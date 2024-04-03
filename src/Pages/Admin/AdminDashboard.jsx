import BlackBusIcon from "../../assets/Icons/black_bus.png"
import BlackMoreIcon from "../../assets/Icons/black_more.png"
import DeleteIcon from "../../assets/Icons/delete.png"

import "../../assets/css/admin/AdminDashboard.css"

export default function AdminDashboard(){
    return(
        <>
            <div className="AdminDashboardAll">
                <div className="AdminIconsDiv">
                    <img src={BlackBusIcon} alt="" />
                    <img src={BlackMoreIcon} alt="" />
                </div>
                <div className="AdminNameStats">
                    <div className="AdminName">
                        <h1>Administrator Dashboard</h1>
                        <h2 className="AdminUsername">Elite Carlson</h2>
                    </div>
                </div>
                <div className="AdminSystemStatistics">
                    <div>
                        <h1>2,403</h1>
                        <p>SMS Sent</p>
                    </div>
                    <div>
                        <h1>8,572</h1>
                        <p>API Calls</p>
                    </div>
                    <div>
                        <h1>3,406</h1>
                        <p>Todays Traffic</p>
                    </div>
                    <div>
                        <h1>102</h1>
                        <p>Live Visitors</p>
                    </div>
                </div>
                <div className="AdminTableSelector">
                    <div className="ExpressTableSelector" id="activeTableSelector">Express</div>
                    <div className="StationTableSelector">Bus Stations</div>
                </div>
                <table>
                    <thead>
                        <tr>
                        <th>Express Name</th>
                        <th>Email Adress</th>
                        <th>Telephone Number</th>
                        <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Volcano Express</td>
                        <td>volcanoexpress@gmail.com</td>
                        <td>0788351253</td>
                        <td><img src={DeleteIcon} alt="" /> Remove</td>
                        </tr>
                        <tr>
                        <td>Horizon Express</td>
                        <td>horizonexpress@gmail.com</td>
                        <td>0788653424</td>
                        <td><img src={DeleteIcon} alt="" /> Remove</td>
                        </tr>
                        <tr>
                        <td>Omega Express</td>
                        <td>omegaexpress@gmail.com</td>
                        <td>0788301873</td>
                        <td><img src={DeleteIcon} alt="" /> Remove</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}