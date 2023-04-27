// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/themes/dark.css';

let timeoutId;
let timerId;
let selectedTime;
let timerOffId;
const maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 100);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  maxDate: maxDate,
  minDate: new Date(),
  onClose(selectedDates) {
    dateProcessor(selectedDates);
  },
};
const dataInputElement = document.querySelector('#datetime-picker');
const startButtonElement = document.querySelector('button[data-start]');
const timerElement = document.querySelector('.timer');
const timerValueElements = document.querySelectorAll('.value');
const timerLabelElements = document.querySelectorAll('.label');
const timerDaysValueElement = document.querySelector('span[data-days]');
const timerHoursValueElement = document.querySelector('span[data-hours]');
const timerMinutesValueElement = document.querySelector('span[data-minutes]');
const timerSecondsValueElement = document.querySelector('span[data-seconds]');

const inputStyle = 'font-size: 20px; margin-left: 10px;';
const timerStyle =
  'font-size: 20px; font-weight: 500; display: flex; justify-content: space-between; width: 320px;';
const timerValueStyle =
  'font-size: 48px; display: flex; justify-content: center; ';
const timerLabelStyle = 'font-size: 14px; font-weight: 500; margin: 0 10px;';

function isStartButtonDisabled(bool) {
  startButtonElement.disabled = bool;
}

isStartButtonDisabled(true);
dataInputElement.style.cssText = inputStyle;
startButtonElement.style.cssText = inputStyle;
timerElement.style.cssText = timerStyle;
timerValueElements.forEach(
  element => (element.style.cssText = timerValueStyle)
);

timerLabelElements.forEach(element => {
  element.style.cssText = timerLabelStyle;
  element.textContent = element.textContent.toUpperCase();
});

const wrongDateMessage = () => {
  window.alert("Please choose a date in the future");
}

function dateProcessor(selectedDates, dateStr, instance) {
  clearTimeout(timeoutId);
  clearTimeout(timerId);
  clearTimeout(timerOffId);
  const currentDate = new Date();
  selectedTime = selectedDates[0].getTime();
  // ((selectedTime - currentDate.getTime()) <= 0) ? wrongDateMessage() : {};
  // // (timeoutId ) ? clearTimeout(timeoutId) : {};
  isStartButtonDisabled(false);
  timeoutId = setTimeout(() => {
    isStartButtonDisabled(true);
  }, selectedTime - currentDate.getTime());
}

function onStartClick() {
  isStartButtonDisabled(true);
  const currentTime = new Date();
  const intervalTimer = selectedTime - currentTime.getTime();
  // console.log(convertMs(intervalTimer));
  refreshRemainderTime(convertMs(selectedTime - currentTime.getTime()));

  timerId = setInterval(() => {
    const currentTime = new Date();
    refreshRemainderTime(convertMs(selectedTime - currentTime.getTime()));
  }, 1000);
  
  timerOffId = setTimeout(() => {
    clearInterval(timerId);
  }, intervalTimer);
}

function refreshRemainderTime(time) {
  const days = time.days;
  const hours = time.hours;
  const minutes = time.minutes;
  const seconds = time.seconds;
  // console.log(
  //   `days - ${days}   hours - ${hours}  minutes - ${minutes}   seconds - ${seconds}`
  // );
  timerDaysValueElement.textContent = addLeadingZero(days);
  timerHoursValueElement.textContent = addLeadingZero(hours);
  timerMinutesValueElement.textContent =addLeadingZero(minutes);
  timerSecondsValueElement.textContent = addLeadingZero(seconds);
}

const addLeadingZero = (value) => {
   return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr(dataInputElement, options);
startButtonElement.addEventListener('click', onStartClick);
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
