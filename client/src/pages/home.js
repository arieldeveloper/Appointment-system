import React from "react";
import {useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import updateDailyTimetable from "../booking";

//Styling Imports
import { GlobalStyles } from "../GlobalStyles.style";
import { Button} from "../components/Button.style";
import { Container, RowContainer, CalenderContainer, AppointmentsContainer} from "../components/Container.style";
import { NavBar } from "../components/NavigationBar.style";
import { ListItem } from "../components/ListItem.style";


// let allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var selectedAppointment = "Please select appointment";

function HomePage() {
    const [value, setValue] = useState(new Date());
    const [appointments, setAppointments] = useState(null);
    const [selectedValue, setSelectedValue] = useState("Nothing Selected");

    const bookAppointment = () => {
        // Function that runs when the "Book Appointment" Button is pressed
        try {
            // Retrieve details for the post body
            let year = selectedAppointment.getYear() + 1900;
            let month = selectedAppointment.getUTCMonth() + 1;
            let day = selectedAppointment.getDate();
            let hours = selectedAppointment.getHours();
            let minutes = selectedAppointment.getUTCMinutes();

            fetch('api/appointments', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    day: day,
                    month: month,
                    year: year,
                    hour: hours,
                    minute: minutes,
                    user: "arieldeveloper",
                })
            })

        } catch {
            console.log("Please select a time");
        }
        setSelectedValue("Booked");
    }

    const getDateString = (date) => {
        let dateString = date.toString().split(' ').splice(0, 4).join(' ');
        return dateString;
    }

    const getDateTimeString = (date) => {
        let dateString = date.toString().split(' ').splice(0, 5).join(' ');
        return dateString;
    }

    const getHourString = (date) => {
        let dateString = date.toString().split(' ').splice(4, 1).join(' ');
        return dateString;
    }


    const handleInput = (element) => {
        selectedAppointment = element.date;
        setSelectedValue(getDateTimeString(element.date));
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
        [<Container backgroundColor="white" textColor="black">
            <GlobalStyles/>

            <NavBar>
                <h1>Book Appointment</h1>
                <div> </div>
                <Button backgroundColor="#3366ff"><Link to="/"></Link>Login</Button>
            </NavBar>

            <CalenderContainer backgroundColor="white"  textColor="black">
                <Calendar onChange={ setValue } value={value}/>
            </CalenderContainer>

            <AppointmentsContainer backgroundColor="black"  textColor="white">
            <h3> Showing Appointments For: { getDateString(value) } </h3>
            <div>
            { appointments && (
                <div>
                    {appointments.map((app, index) => (
                        <ListItem opacity={app.available.toString() === "true" ? 1: 0.6} onClick={app.available.toString() === "true" ? (() => handleInput(app)) : null}> { getHourString(app.date) }</ListItem>
                    ))}
                </div>
            ) }
            </div>
            <h4> Appointment Selected: { selectedValue } </h4>
            <Button backgroundColor="#3366ff" onClick={bookAppointment}>Book Appointment</Button>
            </AppointmentsContainer>

        </Container>]
    );
}

export default HomePage;