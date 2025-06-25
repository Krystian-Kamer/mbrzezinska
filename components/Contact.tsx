'use client';
import { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [afterSubmitMessage, setIsAfterSubmittMessage] = useState<string>('');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
      .then(() => {
        setIsAfterSubmittMessage('Wiadomość wysłano pomyślnie');
      })
      .catch((err) => {
        console.log(err);
        setIsAfterSubmittMessage('Coś poszło nie tak, spróbuj później');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-light flex h-[700px] w-full scroll-mt-[72px] flex-col items-center justify-center"
    >
      <p className="mb-6 text-center uppercase underline sm:text-2xl">Kontakt</p>
      <form
        className="flex w-full flex-col px-10 sm:w-[600px] xl:w-[700px]"
        target="_blank"
        method="POST"
        // action="https://formsubmit.co/"
        onSubmit={handleFormSubmit}
      >
        <label htmlFor="name">Twoje imię</label>
        <input
          className="mb-4 rounded-sm bg-[#e3d9c9] px-2 py-2 focus:outline focus:outline-[#bf9757]"
          type="text"
          name="name"
          required
        />
        <label htmlFor="email">Twój adres email</label>
        <input
          className="mb-4 rounded-sm bg-[#e3d9c9] px-2 py-2 focus:outline focus:outline-[#bf9757]"
          type="email"
          name="email"
          required
        />
        <label htmlFor="title">Temat</label>
        <input
          className="mb-4 rounded-sm bg-[#e3d9c9] px-2 py-2 focus:outline focus:outline-[#bf9757]"
          type="text"
          name="title"
          required
        />
        <label htmlFor="name">Twoja wiadomość</label>
        <textarea
          className="mb-4 h-50 max-h-50 min-h-50 rounded-sm bg-[#e3d9c9] px-2 py-2 focus:outline focus:outline-[#bf9757]"
          name="message"
          required
        />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Dziękuję za przesłanie wiadomości, na pewno się z nią zapoznam."
        />
        <p className="mb-2 text-center">{afterSubmitMessage}</p>
        <button
          className="w-full max-w-[350px] cursor-pointer self-center border-2 border-[#e3d9c9] px-6 py-3 text-[#E1C188FC] uppercase duration-200 hover:border-[#CDAD7DFC] hover:bg-[#CDAD7DFC] hover:text-black/80 sm:max-w-[250px]"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? 'wysyłanie...' : 'wyślij'}
        </button>
      </form>
    </section>
  );
};
export default Contact;
