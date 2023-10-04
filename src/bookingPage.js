import React, { useState, useEffect, useReducer, useCallback } from 'react';
import BookingForm from './BookingForm';

const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'INITIALIZE_TIMES':
            return action.payload;
    case 'UPDATE_TIMES':
        return action.payload;
    default:
    return state;
    }
};
const BookingPage = () => {
  const [availableTimes, dispatchAvailableTimes] = useReducer(availableTimesReducer, []);
  const [selectedTime, setSelectedTime] = useState('');

  const fetchData = async (date) => {
    try {
      
      const response = await fetch(`https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js?fecha=${date}`);
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error al obtener datos de la API: ' + error.message);
    }
  };
  const initializeTimes = useCallback(async () => {
    try {
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      const availableTimes = await fetchData(formattedDate);
      dispatchAvailableTimes({ type: 'INITIALIZE_TIMES', payload: availableTimes });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [dispatchAvailableTimes]);
  useEffect(() => {
    initializeTimes(); 
    }, []);

    const updateTimes = async (selectedDate) => {
      try {
        const availableTimes = await fetchData(selectedDate);
        const additionalTimes = ["20:00", "20:30", "21:00"];
        const updateAvailableTimes = [...availableTimes, ...additionalTimes];
        dispatchAvailableTimes({ type: 'UPDATE_TIMES', payload: updateAvailableTimes });
      } catch (error) {
        console.error("Error updating times:", error);
      }
    };
    
    useEffect(() => {
      initializeTimes();
    }, [initializeTimes]);

  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        updateTimes={updateTimes} />
  </>
  );
}

export default BookingPage;
