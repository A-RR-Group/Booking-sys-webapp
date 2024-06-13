import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import icons from "../../utils/icons";
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
import DesktopOnly from '../Other/DesktopOnly';
import Notification from '../../components/pages/Notification'; // Ensure this import is correct

export default function AdminDashboard(props) {
    // Variables declaration
    const baseURL = "http://localhost:3000/admin/";
    const tableColumn1 = ['Express Name', 'Email Address', 'Telephone Number'];
    const tableColumn2 = ['Bus Station name'];
    const location = useLocation();
    const navigate = useNavigate();
    const [entry1, setEntry1] = useState([]);
    const [entry2, setEntry2] = useState([]);
    const [activeTableSelector, setActiveTableSelector] = useState('Express');
    const [activeAddButton, setActiveAddButton] = useState('Express');
    const [activeTable, setActiveTable] = useState('Express');
    const [activePopup, setActivePopup] = useState([]);
    const [activeMore, setMore] = useState(false);
    const [user, setUser] = useState('');
    const [width, setWidth] = useState(window.innerWidth);
    const [notificationMessage, setNotificationMessage] = useState("");

    const handleNotification = (message) => {
        setNotificationMessage(message);
        setTimeout(() => {
            setNotificationMessage("");
        }, 5000);
    };

    const setHeadersBasedOnQuery = () => {
        const params = new URLSearchParams(location.search);
        if (params.has('express')) {
            setActiveTableSelector('Express');
            setActiveAddButton('Express');
            setActiveTable('Express');
        } else if (params.has('station')) {
            setActiveTableSelector('Bus Stations');
            setActiveAddButton('Bus Stations');
            setActiveTable('Bus Stations');
        } else {
            navigate('?express'); // Default to 'express' if neither parameter is present
        }
    };

    useEffect(() => {
        setHeadersBasedOnQuery();
    }, [location]);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const fetchExpresses = async () => {
            const expresses = await getExpresses();
            setEntry1(expresses);
        };
        const fetchStations = async () => {
            const stations = await getStations();
            setEntry2(stations);
        };
        fetchExpresses();
        fetchStations();

        if (localStorage.getItem('user')) {
            setUser(localStorage.getItem('user'));
        }
    }, []);

    async function getExpresses() {
        const url = baseURL + 'getExpresses';
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("access_token")}`
        };

        try {
            const response = await fetch(url, {
                method: 'GET',
                credentials: 'include',
                headers: headers
            });
            const data = await response.json();
            if (data.access_token) {
                localStorage.setItem("access_token", response.access_token);
            } else if (data.error === "Unauthorized user" || data.error === "Token missing" || data.error === "Forbidden") {
                logout();
            } else {
                return data.expresses;
            }
        } catch (error) {
            console.error('Error:', error);
            return [];
        }
    }

    async function getStations() {
        const url = baseURL + 'getStations';
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("access_token")}`
        };

        try {
            const response = await fetch(url, {
                method: 'GET',
                credentials: 'include',
                headers: headers
            });
            const data = await response.json();
            if (data.access_token) {
                localStorage.setItem("access_token", response.access_token);
            } else if (data.error === "Unauthorized user" || data.error === "Token missing" || data.error === "Forbidden") {
                logout();
            } else {
                return data.stations;
            }
        } catch (error) {
            console.error('Error:', error);
            return [];
        }
    }

    const handleTableSelector = (type) => {
        if (type === 'Express') {
            navigate('?express');
        } else if (type === 'Bus Stations') {
            navigate('?station');
        }
    };

    const handlePopup = (popupName) => {
        setActivePopup([popupName]);
    };

    const logout = () => {
        localStorage.clear();
        props.login(false);
        navigate('');
    };

    if (width < 800) {
        return <DesktopOnly />;
    } else {
        return (
            <>
                {/* Popups that are triggered */}
                {activePopup[0] === "Add Express" && <AddExpress togglePopup={setActivePopup} setExpresses={setEntry1} notification={handleNotification} />}
                {activePopup[0] === "Add Station" && <AddStation togglePopup={setActivePopup} setStations={setEntry2} notification={handleNotification} />}
                {activePopup[0] === "Edit Station" && <EditStation togglePopup={setActivePopup} subject={activePopup} setStations={setEntry2} notification={handleNotification}/>}
                {activePopup[0] === "Remove Bus Station" && <RemoveBusStation togglePopup={setActivePopup} subject={activePopup} setStations={setEntry2} notification={handleNotification}/>}
                {activePopup[0] === "Remove Express" && <RemoveExpress togglePopup={setActivePopup} setExpresses={setEntry1} subject={activePopup} notification={handleNotification} />}
                {notificationMessage && <Notification message={notificationMessage} />}

                <div className="AdminDashboardAll">
                    <div className="AdminIconsDiv">
                        <img src={icons.BlackBusIcon} alt="" />
                        <img src={icons.BlackMoreIcon} alt="" onClick={() => setMore(!activeMore)} className="moreBtn" />
                        {activeMore && <AdminMore toggleMore={setMore} onClick={() => logout()} />}
                    </div>
                    <div className="AdminTitles">
                        <div className="AdminName">
                            <h1 className="PageTitle">Administrator Dashboard</h1>
                            <UsernameTitle username={user} />
                        </div>
                    </div>
                    <div className="AdminSystemStatistics">
                        <StatisticCard numbers="2,403" category="SMS Sent" position="front" />
                        <StatisticCard numbers="8,572" category="API Calls" position="middle" />
                        <StatisticCard numbers="3,406" category="Today's Traffic" position="middle" />
                        <StatisticCard numbers="102" category="Live Visitors" position="end" />
                    </div>
                    {/* Table selectors */}
                    <div className="TableSelectoButtons">
                        <div className="AdminTableSelector">
                            <TableSelector name="Express" position="front" onClick={() => handleTableSelector('Express')} state={activeTableSelector === 'Express' ? 'active' : ''} />
                            <TableSelector name="Bus Stations" position="end" onClick={() => handleTableSelector('Bus Stations')} state={activeTableSelector === 'Bus Stations' ? 'active' : ''} />
                        </div>
                        <div className="AdminTableButtons">
                            <AdminAdd clickHandler={() => handlePopup('Add Express')} state={activeAddButton === 'Express' ? 'active' : ''} text="Add Express" />
                            <AdminAdd clickHandler={() => handlePopup('Add Station')} state={activeAddButton === 'Bus Stations' ? 'active' : ''} text="Add Bus station" /><br /><br />
                        </div>
                    </div>
                    {/* Tables */}
                    <ExpressTable
                        state={activeTable === 'Express' ? 'active' : ''}
                        columns={tableColumn1}
                        entries={entry1}
                        setActivePopup={setActivePopup}
                    />
                    <StationsTable
                        state={activeTable === 'Bus Stations' ? 'active' : ''}
                        columns={tableColumn2}
                        entries={entry2}
                        setActivePopup={setActivePopup}
                    />
                </div>
            </>
        );
    }
}
