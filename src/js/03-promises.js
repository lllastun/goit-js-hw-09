import { Notify } from 'notiflix';
const inputDelayElement = document.querySelector('input[name="delay"]');
const inputStepElement = document.querySelector('input[name="step"]');
const inputAmountElement = document.querySelector('input[name="amount"]');
const buttonSubmintElement = document.querySelector('button');

function createPromise(position, delay) {
  return promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        return resolve({ position, delay });
      } else {
        return reject({ position, delay });
      }
    }, delay);
  });
}

const onSubmint = event => {
  event.preventDefault();
  const inputDelay = +inputDelayElement.value;
  const inputStep = +inputStepElement.value;
  const inputAmount = +inputAmountElement.value;
  // console.log( inputDelay, inputStep, inputAmount);
  for (let i = 0; i < inputAmount; i += 1) {
    // console.log(`position ${i + 1}  delay ${inputDelay + i * inputStep}  `);
    const position = i + 1;
    const delay = inputDelay + i * inputStep;
    // const delay = inputDelay + i * inputStep * Math.random();

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${Math.round(delay)}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${Math.round(delay)}ms`);
      });
  }
};



buttonSubmintElement.addEventListener('click', onSubmint);
