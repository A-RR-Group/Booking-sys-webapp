import React, { useEffect, useState } from 'react';
import icons from "../../utils/icons"

import StatisticCard from "../../components/pages/StatisticCard";
import TableSelector from "../../components/pages/TableSelector";
import UsernameTitle from '../../components/pages/UsernameTitle';
import { ExpressTable, StationsTable } from '../../components/pages/Table';

import "../../assets/css/admin/Dashboard.css";
import AdminAdd from '../../components/pages/AdminAdd';
import AddExpress from '../../components/popups/AddExpress';
import AddStation from '../../components/popups/AddStationComponent';
import EditStation from '../../components/popups/EditStationComponent';
import RemoveBusStation from '../../components/popups/RemoveBusStation';
import RemoveExpress from '../../components/popups/RemoveExpress';
import AdminMore from '../../components/admin/AdminMore';
import Adminlogin from './Index';
import DesktopOnly from '../Other/DesktopOnly';

export default function AdminDashboard() {

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
            'Name': 'Kigali-Remera',
            
        },
        {
            id: 2,
            'Name': 'Kigali-Downtown',
        },
        {
            id: 3,
            'Name': 'Kigali-Nyabugogo',
        }
    ]

    // States declaration
    const [activeTableSelector, setActiveTableSelector] = useState('Express');
    const [activeAddButton, setActiveAddButton] = useState('Express');
    const [activeTable, setActiveTable] = useState('Express');

    const [activePopup, setActivePopup] = useState([]);
    const [activeMore, setMore] = useState(false);
    const [logedIn, setLogedIn] = useState (false);
    const [width, setWidth] = useState(window.innerWidth);

    // After page load on resize set new width 
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // States Handler
    const handleTableSelector = (tableSelectorName) => {
        setActiveTableSelector(tableSelectorName);
        setActiveAddButton(tableSelectorName)
        setActiveTable(tableSelectorName)
    };
    const handlePopup = (popupName) => {
        setActivePopup([popupName]);
    };

    // Functions Declaration & Definition
    const login = (InOrOut) => {
        if(InOrOut){
            setLogedIn(true);
        }else{
            setLogedIn(false);
        }
    }

    if(!logedIn){
        return(
            <>
                <Adminlogin login={login}/>
            </>
        )
    }else if (width < 800) {
        return <DesktopOnly/>
    }else{
        return (
            <>
            {/* Checking the active popup state and popup rendering */}
            {activePopup[0] == "Add Express" ? <AddExpress togglePopup={setActivePopup}/>: ''}
            {activePopup[0] == "Add Station" ? <AddStation togglePopup={setActivePopup}/>: ''}
            {activePopup[0] == "Edit Station" ? <EditStation togglePopup={setActivePopup} subject={activePopup}/>: ''}
            {activePopup[0] == "Remove Bus Station" ? <RemoveBusStation togglePopup={setActivePopup} subject={activePopup}/>: ''}
            {activePopup[0] == "Remove Express" ? <RemoveExpress togglePopup={setActivePopup} subject={activePopup}/>: ''}
            
            {/* Whole admin page division container */}
            <div className="AdminDashboardAll">
                {/* Admin Header */}
                <div className="AdminIconsDiv">
                    <img src={icons.BlackBusIcon} alt="" />
                    <img src={icons.BlackMoreIcon} alt="" onClick={() => setMore(!activeMore)} className="moreBtn"/>
                    {activeMore == true ? <AdminMore toggleMore={setMore} onClick={() => login(false) }/> : ''}
                </div>
                {/* Admin Titles Division */}
                <div className="AdminTitles">
                    <div className="AdminName">       
                        <h1 className="PageTitle">Administrator Dashboard</h1>
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
}
