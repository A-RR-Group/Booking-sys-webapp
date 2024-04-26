import React, { useState } from 'react';
import icons from "../../utils/icons"

import StatisticCard from "../../components/pages/StatisticCard";
import TableSelector from "../../components/pages/TableSelector";
import UsernameTitle from '../../components/pages/UsernameTitle';
import PageTitle from '../../components/pages/PageTitle';
import { BookingsTable, RidesTable, CanceledTable, StationsTable, BusesTable } from '../../components/pages/Table';

import "../../assets/css/admin/Dashboard.css";
import ExpressMore from '../../components/admin/AdminMore';
import { useNavigate } from 'react-router-dom';
import AdminAdd from '../../components/pages/AdminAdd';
import PopupTitle from '../../components/pages/PopupTitle';
import AddBus from '../../components/popups/AddBus';

export default function ExpressDashboard(){
    const navigate = useNavigate()
    // const statsBarentry = [{'SMS Sent': '2,403'}, {'API Calls': '8,572'}, {'Todays Traffic': '3,406'}, {'Live Visitors':'102'}];

    // Table data definition
    const busColumn = ['License Plate', 'Password', 'Capacity'];
    const bookingColumn = ['Start Point', 'End Point', 'Booking-ID', 'Telephone Number', 'Count'];
    const rideColumn = ['Departure Time', 'Start Point', 'End Point', 'Price', 'Bus License Plate', 'Capacity'];
    const canceledColumn = ['Start Point', 'End Point', 'Booking-ID', 'Telephone Number', 'Count'];
    const bookingEntry = [
        {
            'Start Point': 'Remera',
            'End Point': 'Rwamagana',
            'Booking-ID': 'zXc8j-KlO2-7bN6-vGh3',
            'Telephone Number': '*** *** **3075',
            'Count': '1'
        },
        {
            'Start Point': 'Nyabugogo',
            'End Point': 'Nyagatare',
            'Booking-ID': 'O2jM-9IOd-Wmd9-02Nj',
            'Telephone Number': '*** *** **0429',
            'Count': '1'
        },
        {
            'Start Point': 'Remera',
            'End Point': 'Rusizi',
            'Booking-ID': 'iwj3n-N9kd-km91-nILq',
            'Telephone Number': '*** *** **3961',
            'Count': '1'
        }
    ]
    const rideEntry = [
        {
            id: 1,
            'Departure Time': '8:30 AM',
            'Start Point': 'Remera',
            'End Point': 'Rwamagana',
            'Price': '2200 RWF',
            'Bus License Plate': 'RAB 320 R',
            'Capacity': '26/30',
        },
        {
            id: 2,
            'Departure Time': '8:40 AM',
            'Start Point': 'Rusizi',
            'End Point': 'Rubavu',
            'Price': '5000 RWF',
            'Bus License Plate': 'RAB 243 D',
            'Capacity': '22/30',
        },
        {
            id: 3,
            'Departure Time': '8:50 AM',
            'Start Point': 'Nyabugogo',
            'End Point': 'Nyagatare',
            'Price': '4200 RWF',
            'Bus License Plate': 'RAD 597 W',
            'Capacity': '14/30',
        }
    ]
    const canceledEntry = [
        {
            'Start Point': 'Rusizi',
            'End Point': 'Rwamagana',
            'Booking-ID': 'zXc8j-KlO2-7bN6-vGh3',
            'Telephone Number': '*** *** **2040',
            'Count': '1'
        },
        {
            'Start Point': 'Nyabugogo',
            'End Point': 'Nyagatare',
            'Booking-ID': 'hGt6w-VbN3-1kL9-pOq5',
            'Telephone Number': '*** *** **3961',
            'Count': '1'
        },
        {
            'Start Point': 'Remera',
            'End Point': 'Rusizi',
            'Booking-ID': 'aP2r4-MbZ9-3xY8-dRf7',
            'Telephone Number': '*** *** **3961',
            'Count': '1'
        }
    ]

    const busEntry = [
        {
            id: 1,
            'License Plate': 'RAD 597 W',
            'Password': '**************',
            'Capacity': '30',
        },
        {
            id: 2,
            'License Plate': 'RAC 987 T',
            'Password': '**************',
            'Capacity': '27',
        },
        {
            id: 3,
            'License Plate': 'RAD 706 O',
            'Password': '**************',
            'Capacity': '32',
        }
    ]

    // States declaration
    const [activeTableSelector, setActiveTableSelector] = useState('Bookings');
    const [activeAddButton, setActiveAddButton] = useState('');
    const [activeTable, setActiveTable] = useState('Bookings');

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
        navigate('/express');
    }

    return (
        <>
        {/* Checking the active popup state and popup rendering */}
        {/* {activePopup == "Add Bus" ? <AddBus togglePopup={setActivePopup}/>: ''} */}
        
        {/* Whole admin page division container */}
        <div className="AdminDashboardAll">
            {/* Admin Header */}
            <div className="AdminIconsDiv">
                <img src={icons.BlackBusIcon} alt="" />
                <div style={{display: "flex", flexDirection: "row", gap: "45px"}}>
                    <PopupTitle text="Add ride" color="#FF4D00"/>
                    <img src={icons.BlackMoreIcon} alt="" onClick={() => setMore(!activeMore)} className="moreBtn"/>
                </div>
                {activeMore == true ? <AdminMore toggleMore={setMore} onClick={() => logout() }/> : ''}
            </div>
            {/* Admin Titles Division */}
            <div className="AdminTitles">
                <div className="AdminName">       
                    <PageTitle title="Volcano Expres LTD"/>
                    <div style={{display: "flex",flexDirection: "row", alignItems: "baseline", gap: "5px", fontSize: "20px"}}><UsernameTitle username="76,304 Trips"/> <p className="Trip_Dates">(Jan 21 - Feb 20)</p></div>
                </div>
            </div>
            {/* Statictics Division */}
            <div className="AdminSystemStatistics">
                <StatisticCard numbers="2/23" category="Completed Rides" position="front"/>
                <StatisticCard numbers="58" category="Passengers" position="middle"/>
                <StatisticCard numbers="79" category="Bookings" position="middle"/>
                <StatisticCard numbers="4" category="Live Rides" position="end"/>
            </div>
            {/* Table Selectors & add buttons Division */}
            <div className="TableSelectoButtons">
                <div className="AdminTableSelector">
                    <TableSelector name="Bookings" position="front" onClick={() => handleTableSelector('Bookings')} state={activeTableSelector === 'Bookings' ? 'active' : ''}/>
                    <TableSelector name="Canceled" position="middle" onClick={() => handleTableSelector('Canceled')} state={activeTableSelector === 'Canceled' ? 'active' : ''}/>
                    <TableSelector name="Rides" position="middle" onClick={() => handleTableSelector('Rides')} state={activeTableSelector === 'Rides' ? 'active' : ''}/>
                    <TableSelector name="Buses" position="end" onClick={() => handleTableSelector('Buses')} state={activeTableSelector === 'Buses' ? 'active' : ''}/>
                </div>
                <div className="AdminTableButtons">
                    <AdminAdd clickHandler={() => handlePopup('Add Bus')} state={activeAddButton === 'Buses' ? 'active' : ''}  text="Add Bus"/><br/><br/>
                </div>
            </div>
            {/* All admin tables */}
            {/* <ExpressTable state={activeTable === 'Express' ? 'active' : ''} columns={tableColumn1} entries={entry1} setActivePopup={setActivePopup}/> */}
            {/* <StationsTable state={activeTable === 'Bus Stations' ? 'active' : ''} columns={tableColumn2} entries = {entry2} setActivePopup={setActivePopup}/> */}
            <BookingsTable state={activeTable === 'Bookings' ? 'active' : ''} columns={bookingColumn} entries = {bookingEntry}/>
            <CanceledTable state={activeTable === 'Canceled' ? 'active' : ''} columns={canceledColumn} entries = {canceledEntry}/>
            <RidesTable state={activeTable === 'Rides' ? 'active' : ''} columns={rideColumn} entries = {rideEntry}/>
            <BusesTable state={activeTable === 'Buses' ? 'active' : ''} columns={busColumn} entries = {busEntry} setActivePopup={setActivePopup}/>
        </div>
        </>
    );
}