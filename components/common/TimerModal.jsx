import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";

const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

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
  const [fiveDates, setFiveDates] = useState([]);
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

      return d1;
    });
  };

  useEffect(() => {
    setSelectedHour({ hour: "", meridiem: "" });
    setTimesState(getHours(selectedDate));
  }, [selectedDate]);

  useEffect(() => {
    for (let i = 0; i < fiveDates.length; i++) {
      const d = new Date(fiveDates[i]);
      if (
        d.getDate() === selectedDate.getDate() &&
        d.getMonth() === selectedDate.getMonth() &&
        d.getFullYear() === selectedDate.getFullYear()
      ) {
        return;
      }
    }
    const dates = [];
    for (let i = 0; i < 5; i++) {
      const d1 = new Date(selectedDate);
      d1.setDate(d1.getDate() + i);

      dates.push(d1);
    }

    setFiveDates(dates);
  }, [selectedDate, fiveDates]);

  return (
    <div
      className={`rounded-[3.5rem] py-12 pb-8 px-8 bg-white w-lg z-10 flex flex-col max-h-[90%] modal-w  ${
        short ? "" : "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      }`}
    >
      <div className="flex items-center gap-5 pb-3">
        <Image
          width={80}
          height={80}
          className="w-20"
          src="/user.png"
          alt="user"
        />

        <div>
          <div className="text-xl text-[#3b0a0d] font-bold">
            Let&apos;s Talk
          </div>
          <div className="text-base text-[#3b0a0d] font-bold">
            Nicolas Machado - CEO
          </div>
        </div>
      </div>

      {!scheduleConfirmed ? (
        <div className="flex-grow mt-6 nice-scrollbar overflow-auto">
          <div className="text-base text-[#290002] font-extrabold mb-4">
            Date
          </div>
          <div className="bg-[#e5dbd2] py-5 px-5 rounded-2xl flex justify-between items-start h-24">
            <Image
              width={32}
              height={32}
              className="cursor-pointer w-5 h-5 rotate-180 sm:w-8 sm:h-8"
              src="/arrow.png"
              alt="arrow"
              onClick={decrementDate}
            />

            <div className="flex-grow flex justify-evenly">
              {fiveDates.map((el, idx) => {
                return (
                  <div key={el} className="text-center">
                    <div className="font-bold leading-none">
                      {days[el.getDay()]}
                    </div>
                    <div className="font-bold leading-none">{el.getDate()}</div>

                    {new Date(selectedDate).getDate() === el.getDate() &&
                      new Date(selectedDate).getMonth() === el.getMonth() &&
                      new Date(selectedDate).getFullYear() ===
                        el.getFullYear() && (
                        <div className="w-2 h-2 rounded-full mx-auto bg-[#5e2222] mt-3"></div>
                      )}
                  </div>
                );
              })}
            </div>

            <Image
              width={32}
              height={32}
              className="cursor-pointer w-5 h-5 sm:w-8 sm:h-8"
              src="/arrow.png"
              alt="arrow"
              onClick={incrementDate}
            />
          </div>
          <div className="mt-6 text-base text-[#290002] font-extrabold">
            Time
          </div>
          <div className="flex flex-wrap justify-between mt-4">
            {timesState.map((el, idx) => {
              return (
                <div
                  key={"time" + idx}
                  onClick={() => {
                    setSelectedHour({ hour: el.label, meridiem: el.meridiem });
                  }}
                  className={`last:mb-0 h-14 font-sans font-bold text-center rounded-lg py-3 w-32 mt-5 border-2 border-solid cursor-pointer ${
                    el.label === selectedHour.hour &&
                    el.meridiem === selectedHour.meridiem
                      ? "bg-[#654b4a] text-white border-[#654b4a]"
                      : "bg-[#e5dbd2] text-[#4c2321] border-transparent"
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
        <div className="px-2 py-5 nice-scrollbar overflow-auto">
          <div className="bg-[#ececee] rounded-md overflow-hidden relative">
            <div className="h-8 bg-[#caccdb] w-[1px] absolute left-14 top-2"></div>
            <Image
              width={24}
              height={24}
              src="/id-card-clip-alt.png"
              alt="id-card"
              className="w-6 absolute left-4 top-1/2 -translate-y-1/2"
            />
            <input
              type="text"
              className="outline-none bg-transparent w-full h-12 px-5 ml-12"
              // className="w-full border-black border-solid border-2 rounded-xl h-12 px-4 font-bold mb-5"
              placeholder="First Name"
            />
          </div>
          <div className="bg-[#ececee] rounded-md overflow-hidden mt-4 relative">
            <div className="h-8 bg-[#caccdb] w-[1px] absolute left-14 top-2"></div>
            <Image
              width={24}
              height={24}
              src="/circle-envelope.png"
              alt="circle-envelope"
              className="w-6 absolute left-4 top-1/2 -translate-y-1/2"
            />
            <input
              type="email"
              className="outline-none bg-transparent w-full h-12 px-5 ml-12"
              // className="w-full border-black border-solid border-2 rounded-xl h-12 px-4 font-bold"
              placeholder="Email"
            />
          </div>
          <div className="bg-[#ececee] rounded-md overflow-hidden mt-4 relative">
            <div className="h-8 bg-[#caccdb] w-[1px] absolute left-14 top-2"></div>
            <Image
              width={24}
              height={24}
              src="/linkedin.png"
              alt="linked-in"
              className="w-6 absolute left-4 top-1/2 -translate-y-1/2"
            />
            <input
              type="email"
              className="outline-none bg-transparent w-full h-12 px-5 ml-12"
              // className="w-full border-black border-solid border-2 rounded-xl h-12 px-4 font-bold"
              placeholder="Website or LinkedIn"
            />
          </div>

          <div className="mt-5 mb-3 text-base font-extrabold">Budget</div>

          <div className="flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-2"
              for="html"
              data-ripple-dark="true"
            >
              <input
                id="html"
                name="type"
                type="radio"
                className=" peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-[#5e2222] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#e5dbd2] checked:before:bg-[#e5dbd2]"
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-[#5e2222] opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light text-gray-700"
              for="html"
            >
              $1 - $2
            </label>
          </div>
          <div className="flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-2"
              for="react"
              data-ripple-dark="true"
            >
              <input
                id="react"
                name="type"
                type="radio"
                className=" peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#e5dbd2] checked:before:bg-[#e5dbd2]"
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-[#5e2222] opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light text-gray-700"
              for="react"
            >
              $2 - $3
            </label>
          </div>
          <div className="flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-2"
              for="react"
              data-ripple-dark="true"
            >
              <input
                id="react"
                name="type"
                type="radio"
                className=" peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#e5dbd2] checked:before:bg-[#e5dbd2]"
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-[#5e2222] opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light text-gray-700"
              for="react"
            >
              $4+
            </label>
          </div>

          <div class="flex items-center mb-4 ml-3 mt-6">
            <input
              type="checkbox"
              id="checkbox1"
              class="peer rounded-sm relative h-5 w-5 shrink-0 appearance-none border after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-[#5e2222] focus:outline-none"
            />
            <label
              for="checkbox1"
              class="w-full cursor-pointer ml-3 text-gray-700 text-sm"
            >
              Agree to Terms and Conditions
            </label>
          </div>
        </div>
      )}

      <div className="flex justify-center pt-6">
        <button
          className="bg-[#5e2222] text-white font-bold rounded-2xl px-6 py-3 text-lg flex items-center gap-2"
          onClick={() => {
            if (!scheduleConfirmed) {
              if (selectedHour.hour && selectedHour.meridiem)
                setScheduleConfirmed(true);
            } else {
            }
          }}
        >
          <Image
            width={24}
            height={30}
            className="w-6"
            src="/coffee-cups.png"
            alt="coffee-cups"
          />{" "}
          {!scheduleConfirmed ? "Schedule" : "Book"}
        </button>
      </div>
    </div>
  );
};

export default TimerModal;
