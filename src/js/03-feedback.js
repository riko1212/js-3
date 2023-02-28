const contactForm = document.querySelector('.feedback-form');

const fillForm = () => {
  let lsData;
  try {
    lsData = JSON.parse(localStorage.getItem('userData'));
    console.log(lsData);
  } catch (err) {
    console.log(err);
  }
  for (const prop in lsData) {
    if (lsData.hasOwnProperty(prop)) {
      console.log(contactForm.elements[prop]);
      contactForm.elements[prop].value = lsData[prop];
    }
  }
  return lsData;
};

fillForm();
const userData = {
  email: '',
  message: '',
};
const onFormChange = event => {
  const { target } = event;
  const fieldValue = target.value;
  const fieldname = target.name;
  userData[fieldname] = fieldValue;

  localStorage.setItem('userData', JSON.stringify(userData));
};

contactForm.addEventListener('input', onFormChange);
