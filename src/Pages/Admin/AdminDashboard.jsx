import React, { useState } from 'react';
import icons from "../../utils/icons"

import StatisticCard from "../../components/StatisticCard";
import TableSelector from "../../components/TableSelector";
import UsernameTitle from '../../components/UsernameTitle';
import PageTitle from '../../components/PageTitle';
import { ExpressTable, StationsTable } from '../../components/Table';

import "../../assets/css/admin/AdminDashboard.css";
import AdminAdd from '../../components/AdminAdd';
import AddExpress from '../../components/popups/AddExpress';
import AddStation from '../../components/popups/AddStationComponent';
import EditStation from '../../components/popups/EditStationComponent';
import RemoveBusStation from '../../components/popups/RemoveBusStation';
import RemoveExpress from '../../components/popups/RemoveExpress';
import AdminMore from '../../components/AdminMore';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
    const navigate = useNavigate()
    // const statsBarentry = [{'SMS Sent': '2,403'}, {'API Calls': '8,572'}, {'Todays Traffic': '3,406'}, {'Live Visitors':'102'}];

    // Table data definition
    const tableColumn1 = ['Express Name','Email Address', 'Telephone Number'];
    const tableColumn2 = ['Bus Station name'];
    const entry1 = [
        {
            id: 1,
            'Express Name': 'Volcano Express',
            'Email Address': 'volcanoexpress@gmail.com',
            'Telephone Number': '0788351253',
        },
        {
            id: 2,
            'Express Name': 'Horizon Express',
            'Email Address': 'horizonexpress@gmail.com',
            'Telephone Number': '0788653424',
        },
        {
            id: 3,
            'Express Name': 'Omega Express',
            'Email Address': 'omegaexpress@gmail.com',
            'Telephone Number': '0788301873',
        }
    ]
    const entry2 = [
        {
            id: 1,
            'Bus_Station_name': 'Kigali-Remera',
            
        },
        {
            id: 2,
            'Bus_Station_name': 'Kigali-Downtown',
        },
        {
            id: 3,
            'Bus_Station_name': 'Kigali-Nyabugogo',
        }
    ]

    // States declaration
    const [activeTableSelector, setActiveTableSelector] = useState('Express');
    const [activeAddButton, setActiveAddButton] = useState('Express');
    const [activeTable, setActiveTable] = useState('Express');

    const [activePopup, setActivePopup] = useState('');
    const [activeMore, setMore] = useState(false);

    // States Handler
    const handleTableSelector = (tableSelectorName) => {
        setActiveTableSelector(tableSelectorName);
        setActiveAddButton(tableSelectorName)
        setActiveTable(tableSelectorName)
    };
    const handlePopup = (popupName) => {
        setActivePopup(popupName);
    };

    // Functions Declaration & Definition
    const logout = () => {
        navigate('/admin');
    }

    return (
        <>
        {/* Checking the active popup state and popup rendering */}
        {activePopup == "Add Express" ? <AddExpress togglePopup={setActivePopup}/>: ''}
        {activePopup == "Add Station" ? <AddStation togglePopup={setActivePopup}/>: ''}
        {activePopup == "Edit Station" ? <EditStation togglePopup={setActivePopup}/>: ''}
        {activePopup == "Remove Bus Station" ? <RemoveBusStation togglePopup={setActivePopup}/>: ''}
        {activePopup == "Remove Express" ? <RemoveExpress togglePopup={setActivePopup}/>: ''}
        
        {/* Whole admin page division container */}
        <div className="AdminDashboardAll">
            {/* Admin Header */}
            <div className="AdminIconsDiv">
                <img src={icons.BlackBusIcon} alt="" />
                <img src={icons.BlackMoreIcon} alt="" onClick={() => setMore(!activeMore)} className="moreBtn"/>
                {activeMore == true ? <AdminMore toggleMore={setMore} onClick={() => logout() }/> : ''}
            </div>
            {/* Admin Titles Division */}
            <div className="AdminTitles">
                <div className="AdminName">       
                    <PageTitle title="Administrator Dashboard"/>
                    <UsernameTitle username="Elite Carlson"/>
                </div>
            </div>
            {/* Statictics Division */}
            <div className="AdminSystemStatistics">
                <StatisticCard numbers="2,403" category="SMS Sent" position="front"/>
                <StatisticCard numbers="8,572" category="API Calls" position="middle"/>
                <StatisticCard numbers="3,406" category="Todays Traffic" position="middle"/>
                <StatisticCard numbers="102" category="Live Visitors" position="end"/>
            </div>
            {/* Table Selectors & add buttons Division */}
            <div className="TableSelectoButtons">
                <div className="AdminTableSelector">
                    <TableSelector name="Express" position="front" onClick={() => handleTableSelector('Express')} state={activeTableSelector === 'Express' ? 'active' : ''}/>
                    <TableSelector name="Bus Stations" position="end" onClick={() => handleTableSelector('Bus Stations')} state={activeTableSelector === 'Bus Stations' ? 'active' : ''}/>
                </div>
                <div className="AdminTableButtons">
                    <AdminAdd clickHandler={() => handlePopup('Add Express')} state={activeAddButton === 'Express' ? 'active' : ''}  text="Add Express"/>
                    <AdminAdd clickHandler={() => handlePopup('Add Station')} state={activeAddButton === 'Bus Stations' ? 'active' : ''}text="Add Bus station"/><br/><br/>
                </div>
            </div>
            {/* All admin tables */}
            <ExpressTable state={activeTable === 'Express' ? 'active' : ''} columns={tableColumn1} entries={entry1} setActivePopup={setActivePopup}/>
            <StationsTable state={activeTable === 'Bus Stations' ? 'active' : ''} columns={tableColumn2} entries = {entry2} setActivePopup={setActivePopup}/>
        </div>
        </>
    );
}
