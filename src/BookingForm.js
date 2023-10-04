import React, { useState, useEffect } from 'react';

function BookingForm({ availableTimes, selectedTime, setSelectedTime, updateTimes }) {
  const [date, setDate] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');
  const [occassion, setOccassion] = useState('');

  const handleDataChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    updateTimes(newDate);
  }
   const handleSubmit= (e) => {
    e.preventDefault();
    console.log("Reservation submitted");
    console.log("Selected time:", selectedTime)
   }

  return (
    <div className="all-form">
      <div className="div-title">
        <h2 className="reservation-table">Reserve a table</h2>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <fieldset>
          <div>
            <label htmlFor="date">Choose a date: </label>
            <input
              id="date"
              type="date"
              name="date"
              value={date}
              onChange={handleDataChange}
            />
          </div>
          <div>
            <label htmlFor="time">Choose time: </label>
            <select
              id="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value=""></option>
              {availableTimes.map((timeOption, index) => (
                <option key={index} value={timeOption}>
                  {timeOption}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="guests">Number of guests: </label>
            <input
              id="guests"
              type="number"
              name="guests"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="occassion">Occasion: </label>
            <input
              id="occasion"
              type="text"
              name="occasion"
              value={occassion}
              onChange={(e) => setOccassion(e.target.value)}
            />
          </div>
        </fieldset>
        <div className="button-form">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
           

