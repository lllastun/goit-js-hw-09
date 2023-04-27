const timeout = 1000;
const buttonStartElement = document.querySelector('button[data-start]');
const buttonStopElement = document.querySelector('button[data-stop]');
const bodyElement = document.querySelector('body');
const scriptElement = document.querySelector('script');
const buttonStyle = 'font-size: 22px; padding: 10px 16px; margin: 0px 5px';
const changeBgColorIsActive = false;
const buttonWrapper = document.createElement('div');
buttonWrapper.className = 'buttonWapper';
buttonWrapper.style.cssText = ('position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%)');
buttonStartElement.style.cssText = buttonStyle;
buttonStopElement.style.cssText = buttonStyle;
buttonStopElement.disabled = true;
buttonStartElement.textContent = buttonStartElement.textContent.toUpperCase();
buttonStopElement.textContent = buttonStopElement.textContent.toUpperCase();

buttonWrapper.append(buttonStartElement);
buttonWrapper.append(buttonStopElement);
bodyElement.insertBefore (buttonWrapper, scriptElement);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function changeBodyBgColor() {
  bodyElement.style.backgroundColor = getRandomHexColor();
}

const timerId = setTimeout(() => {
  
}, timeout);

const onClickStart = e =>  {
  changeBodyBgColor();
}
buttonWrapper.insertBefore(buttonStartElement, null);
buttonWrapper.insertBefore(buttonStopElement, null);
buttonStartElement.addEventListener("click", onClickStart);
