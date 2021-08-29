import React from "react";
import {useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import updateDailyTimetable from "../components/booking";

let allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function HomePage() {
    const [value, setValue] = useState(new Date());
    const [appointments, setAppointments] = useState(null);
    const [selectedValue, setSelectedValue] = useState("Nothing Selected");

    const bookAppointment = () => {
        console.log('booked appointment for ' + getDateTimeString(selectedValue));

    }

    const getDateString = (date) => {
        let dateString = date.toString().split(' ').splice(0, 4).join(' ');
        return dateString;
    }

    const getDateTimeString = (date) => {
        let dateString = date.toString().split(' ').splice(0, 6).join(' ');
        return dateString;
    }

    const handleInput = (element) => {
        setSelectedValue(getDateTimeString(element));
    }

    //Import Data from MongoDB
    useEffect(() => {

        getAppointments();

        async function getAppointments() {
            const apiURL = "api/appointments"
            const response = await fetch(apiURL);
            const data = await response.json();
            const updatedData = updateDailyTimetable(9, 17, 60,
                value.getUTCDate(), value.getUTCMonth() + 1, value.getUTCFullYear(), data);
            setAppointments(updatedData);
        }
    });

    //
    return (
        [<div>
            <h1>Home
                <Link to="/users"> Users </Link></h1>

            <Calendar onChange={ setValue }
                      value={value}/>

            <h3> Showing Appointments For: { getDateString(value) } </h3>
            { appointments && (
                <div>
                    {appointments.map((app, index) => (
                        <li onClick={() => handleInput(app.date)}> { getDateTimeString(app.date) },
                            available: { app.available.toString() } </li>

                        // <h5>{ allMonths[app.month - 1] } { app.day }, { app.year }
                        // at {app.hour }:{ "0" + app.minute },
                        //     Availability: {app.available.toString()} }
                        // </h5>
                    ))}
                </div>
            ) }

            <h4> Appointment Selected: { selectedValue } </h4>
            <button onClick={bookAppointment}>Book Appointment</button>

        </div>]
    );
}

export default HomePage;