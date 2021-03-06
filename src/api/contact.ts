// import { urls } from 'constants/urls';
import { ContactFormValues } from 'src/types';

export const sendContactMail = async (body: ContactFormValues) => {
  try {
    const data = await fetch('', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
