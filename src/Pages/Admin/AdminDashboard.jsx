import React, { useState } from 'react';
import BlackBusIcon from "../../assets/Icons/black_bus.png";
import BlackMoreIcon from "../../assets/Icons/black_more.png";
import DeleteIcon from "../../assets/Icons/delete.png";
import WriteIcon from "../../assets/Icons/write.png"

import StatisticCard from "../../components/StatisticCard";
import TableSelector from "../../components/TableSelector";
import UsernameTitle from '../../components/UsernameTitle';
import PageTitle from '../../components/PageTitle';
import Table from '../../components/Table';

import "../../assets/css/admin/AdminDashboard.css";
import AdminAdd from '../../components/AdminAdd';

export default function AdminDashboard() {
    const [activeTableSelector, setActiveTableSelector] = useState('Express');
    const [activeAddButton, setActiveAddButton] = useState('Express');
    const [activeTable, setActiveTable] = useState('Express');

    const handleTableSelector = (tableSelectorName) => {
        setActiveTableSelector(tableSelectorName);
        setActiveAddButton(tableSelectorName)
        setActiveTable(tableSelectorName)
    };

    return (
        <div className="AdminDashboardAll">
            <div className="AdminIconsDiv">
                <img src={BlackBusIcon} alt="" />
                <img src={BlackMoreIcon} alt="" />
            </div>
            <div className="AdminNameStats">
                <div className="AdminName">       
                    <PageTitle title="Administrator Dashboard"/>
                    <UsernameTitle username="Elite Carlson"/>
                </div>
            </div>
            <div className="AdminSystemStatistics">
                <StatisticCard numbers="2,403" category="SMS Sent" position="front"/>
                <StatisticCard numbers="8,572" category="API Calls" position="middle"/>
                <StatisticCard numbers="3,406" category="Todays Traffic" position="middle"/>
                <StatisticCard numbers="102" category="Live Visitors" position="end"/>
            </div>
            <div className="TableSelectoButtons">
                <div className="AdminTableSelector">
                    <TableSelector
                        name="Express"
                        position="front"
                        onClick={() => handleTableSelector('Express')}
                        state={activeTableSelector === 'Express' ? 'active' : ''}
                    />
                    <TableSelector
                        name="Bus Stations"
                        position="end"
                        onClick={() => handleTableSelector('Bus Stations')}
                        state={activeTableSelector === 'Bus Stations' ? 'active' : ''}
                    />
                </div>
                <div className="AdminTableButtons">
                    <AdminAdd 
                        state={activeAddButton === 'Express' ? 'active' : ''}
                        text="Add Express"
                    />
                    <AdminAdd 
                        state={activeAddButton === 'Bus Stations' ? 'active' : ''}
                        text="Add Bus station"
                    />
                </div>
            </div>
            <Table 
                state={activeTable === 'Express' ? 'active' : ''}
                columns={['Express Name','Email Address', 'Telephone Number', 'Remove']}
                const entries = {[
                    {
                        id: 1,
                        'Express Name': 'Volcano Express',
                        'Email Address': 'volcanoexpress@gmail.com',
                        'Telephone Number': '0788351253',
                        'Remove': <><div className="deleteButton"><img src={DeleteIcon} alt="" /> Remove</div></>
                    },
                    {
                        id: 2,
                        'Express Name': 'Horizon Express',
                        'Email Address': 'horizonexpress@gmail.com',
                        'Telephone Number': '0788653424',
                        'Remove': <><div className="deleteButton"><img src={DeleteIcon} alt="" /> Remove</div></>
                    },
                    {
                        id: 3,
                        'Express Name': 'Omega Express',
                        'Email Address': 'omegaexpress@gmail.com',
                        'Telephone Number': '0788301873',
                        'Remove': <><div className="deleteButton"><img src={DeleteIcon} alt="" /> Remove</div></>
                    }
                ]}
            />

            <Table 
                state={activeTable === 'Bus Stations' ? 'active' : ''}
                columns={['Bus Station name', 'Edit', 'Remove']}
                const entries = {[
                    {
                        id: 1,
                        'Bus Station name': 'Kigali-Remera',
                        'Edit': <><div><img src={WriteIcon}/> &nbsp; Edit</div></>,
                        'Remove': <><div className="deleteButton"><img src={DeleteIcon} alt="" /> Remove</div></>
                    },
                    {
                        id: 2,
                        'Bus Station name': 'Kigali-Downtown',
                        'Edit': <><div><img src={WriteIcon}/> &nbsp; Edit</div></>,
                        'Remove': <><div className="deleteButton"><img src={DeleteIcon} alt="" /> Remove</div></>
                    },
                    {
                        id: 3,
                        'Bus Station name': 'Kigali-Nyabugogo',
                        'Edit': <><div><img src={WriteIcon}/> &nbsp; Edit</div></>,
                        'Remove': <><div className="deleteButton"><img src={DeleteIcon} alt="" /> Remove</div></>
                    }
                ]}
            />
        </div>
    );
}