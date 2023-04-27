const timeout = 1000;
const buttonStartElement = document.querySelector('button[data-start]');
const buttonStopElement = document.querySelector('button[data-stop]');
const bodyElement = document.querySelector('body');
const scriptElement = document.querySelector('script');
const buttonStyle = 'font-size: 22px; padding: 10px 16px; margin: 0px 5px';
const changeBgColorIsActive = false;
const buttonWrapper = document.createElement('div');
buttonWrapper.className = 'buttonWapper';
buttonWrapper.style.cssText =
  'position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%)';
buttonStartElement.style.cssText = buttonStyle;
buttonStopElement.style.cssText = buttonStyle;
buttonStopElement.disabled = true;
buttonStartElement.textContent = buttonStartElement.textContent.toUpperCase();
buttonStopElement.textContent = buttonStopElement.textContent.toUpperCase();

buttonWrapper.append(buttonStartElement);
buttonWrapper.append(buttonStopElement);
bodyElement.insertBefore(buttonWrapper, scriptElement);
let timerId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBodyBgColor() {
  bodyElement.style.backgroundColor = getRandomHexColor();
}

function onClickStart() {
  buttonStartElement.disabled = true;
  buttonStopElement.disabled = false;
  changeBodyBgColor();
  timerId = setInterval(changeBodyBgColor, 1000);
}

function onClickStop() {
  buttonStartElement.disabled = false;
  buttonStopElement.disabled = true;
  clearInterval(timerId);
}
buttonWrapper.insertBefore(buttonStartElement, null);
buttonWrapper.insertBefore(buttonStopElement, null);
buttonStartElement.addEventListener('click', onClickStart);
buttonStopElement.addEventListener('click', onClickStop);
