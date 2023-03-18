import React, { useEffect, useState } from "react";
import Button from "./Button";

const getHours = (givenDate) => {
  const givenDateObj = new Date(givenDate);
  const dateNow = new Date();
  let hours = [
    { label: "12:00", meridiem: "AM" },
    { label: "01:00", meridiem: "AM" },
    { label: "02:00", meridiem: "AM" },
    { label: "03:00", meridiem: "AM" },
    { label: "04:00", meridiem: "AM" },
    { label: "05:00", meridiem: "AM" },
    { label: "06:00", meridiem: "AM" },
    { label: "07:00", meridiem: "AM" },
    { label: "08:00", meridiem: "AM" },
    { label: "09:00", meridiem: "AM" },
    { label: "10:00", meridiem: "AM" },
    { label: "11:00", meridiem: "AM" },
    { label: "12:00", meridiem: "PM" },
    { label: "01:00", meridiem: "PM" },
    { label: "02:00", meridiem: "PM" },
    { label: "03:00", meridiem: "PM" },
    { label: "04:00", meridiem: "PM" },
    { label: "05:00", meridiem: "PM" },
    { label: "06:00", meridiem: "PM" },
    { label: "07:00", meridiem: "PM" },
    { label: "08:00", meridiem: "PM" },
    { label: "09:00", meridiem: "PM" },
    { label: "10:00", meridiem: "PM" },
    { label: "11:00", meridiem: "PM" },
  ];
  if (
    dateNow.getDate() === givenDateObj.getDate() &&
    dateNow.getMonth() === givenDateObj.getMonth() &&
    dateNow.getFullYear() === givenDateObj.getFullYear()
  ) {
    let h = dateNow.getHours();
    hours.splice(0, h + 1);
    return hours;
  } else {
    return hours;
  }
};

const TimerModal = ({ short, closeModal }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState({
    hour: "",
    meridiem: "",
  });
  const [timesState, setTimesState] = useState([
    {
      label: "10:00",
      meridiem: "PM",
    },
    {
      label: "11:00",
      meridiem: "PM",
    },
    {
      label: "12:00",
      meridiem: "PM",
    },
    {
      label: "13:00",
      meridiem: "PM",
    },
    {
      label: "14:00",
      meridiem: "PM",
    },
  ]);
  const [scheduleConfirmed, setScheduleConfirmed] = useState(false);

  const decrementDate = () => {
    if (scheduleConfirmed) return;
    setSelectedDate((prev) => {
      const d1 = new Date(prev);
      d1.setDate(d1.getDate() - 1);
      d1.setHours(0, 0, 0, 0);

      const dateNow = new Date();
      dateNow.setHours(0, 0, 0, 0);

      if (d1.getTime() < dateNow.getTime()) return prev;

      const d2 = new Date(prev);
      d2.setDate(d2.getDate() - 1);

      return d2;
    });
  };

  const incrementDate = () => {
    if (scheduleConfirmed) return;
    setSelectedDate((prev) => {
      const d1 = new Date(prev);
      d1.setDate(d1.getDate() + 1);

      const hs = d1.getHours();
      const ms = d1.getMinutes();
      const ss = d1.getSeconds();
      console.log(d1.toTimeString(), hs, ms, ss);

      return d1;
    });
  };

  useEffect(() => {
    setSelectedHour({ hour: "", meridiem: "" });
    setTimesState(getHours(selectedDate));
  }, [selectedDate]);

  return (
    <div
      className={`rounded-3xl pt-10 pb-6 px-6 bg-gray-100 w-full max-w-[350px] z-10 flex flex-col max-h-[90%] ${
        short ? "" : "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      }`}
    >
      <div className="flex justify-between items-center">
        <img
          className="cursor-pointer w-7 rotate-90"
          src="/caret.png"
          onClick={decrementDate}
        />
        <div className="text-4xl text-center font-dumbledore">
          {new Date().getDate() === selectedDate.getDate() &&
          new Date().getMonth() === selectedDate.getMonth() &&
          new Date().getFullYear() === selectedDate.getFullYear()
            ? "TODAY"
            : new Date().getDate() + 1 === selectedDate.getDate() &&
              new Date().getMonth() === selectedDate.getMonth() &&
              new Date().getFullYear() === selectedDate.getFullYear()
            ? "TOMORROW"
            : `${selectedDate.getDate()} / ${selectedDate.getMonth() + 1}`}
        </div>
        <img
          className="cursor-pointer w-7 -rotate-90"
          src="/caret.png"
          onClick={incrementDate}
        />
      </div>

      {!scheduleConfirmed ? (
        <div className="px-2 flex-grow bg-gray-200 rounded-[40px] mt-5 py-5">
          <div className="px-4 flex flex-col items-center overflow-auto nice-scrollbar">
            {timesState.map((el, idx) => {
              return (
                <div
                  key={"time" + idx}
                  onClick={() => {
                    setSelectedHour({ hour: el.label, meridiem: el.meridiem });
                  }}
                  className={`last:mb-0 font-sans font-bold text-center rounded-2xl py-3 w-32 mb-5 border-2 border-solid border-black cursor-pointer ${
                    el.label === selectedHour.hour &&
                    el.meridiem === selectedHour.meridiem
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {el.label}{" "}
                  <span className="text-xs font-extrabold">{el.meridiem}</span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="px-2 py-5">
          <input
            type="text"
            className="w-full border-black border-solid border-2 rounded-xl h-12 px-4 font-bold mb-5"
            placeholder="First Name"
          />
          <input
            type="email"
            className="w-full border-black border-solid border-2 rounded-xl h-12 px-4 font-bold"
            placeholder="Email"
          />
        </div>
      )}

      <div className="flex justify-center">
        <Button
          noShadow
          onClick={() => {
            setScheduleConfirmed(true);
          }}
        >
          {!scheduleConfirmed ? "Confirm schedule" : "Book sprint call"}
        </Button>
      </div>
    </div>
  );
};

export default TimerModal;
