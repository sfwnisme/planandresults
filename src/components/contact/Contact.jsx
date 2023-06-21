import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

const ContactInfo = ({
  header: { title, description },
  contact_info: { call, email, link },
  social_info,
}) => {
  return (
    <article className="bg-c-primary-900 text-white p-8 w-sm max-md:w-full rounded-lg">
      <h2
        className="TITLE text-white text-center text-2xl max-sm:text-xl font-bold mb-5 max-sm:mb-1"
        data-aos="fade-up"
      >
        {title}
      </h2>
      <p
        className="DESCRIPTION text-white text-center text-base max-sm:text-sm mb-8 max-sm:mb-4"
        data-aos="fade-up"
      >
        {description}
      </p>
      <div className="CONTACT_INFO text-white flex flex-col items-start justify-start gap-6 max-sm:gap-1 mb-8 max-sm:mb-4">
        <a
          href={call.href}
          alt={call.text}
          className="PHONE flex items-center justify-start gap-2 text-lg max-sm:text-sm font-thin"
          data-aos="fade-up"
        >
          <img src={call.icon} alt={call.text} />
          {call.text}
        </a>
        <a
          href={email.href}
          alt={email.text}
          className="EMAIL flex items-center justify-start gap-2 text-lg max-sm:text-sm font-thin"
          data-aos="fade-up"
        >
          <img src={email.icon} alt={email.text} />
          {email.text}
        </a>
        <a
          href={link.href}
          alt={link.text}
          className="WEBSITE flex items-center justify-start gap-2 text-lg max-sm:text-sm font-thin"
          data-aos="fade-up"
        >
          <img src={link.icon} alt={link.text} />
          {link.text}
        </a>
      </div>
      <div className="SOCIAL_LINKS flex items-start justify-start max-sm:gap-1">
        <a
          href={social_info.fb.href}
          alt={social_info.fb.alt}
          data-aos="fade-up"
        >
          <AiFillFacebook className="fill-white hover:fill-c-text-secondary-2 h-10 max-sm:h-8 w-10 max-sm:w-8 duration-150" />
        </a>
        <a
          href={social_info.insta.href}
          alt={social_info.insta.alt}
          data-aos="fade-up"
        >
          <AiFillInstagram className="fill-white hover:fill-c-text-secondary-2 h-10 max-sm:h-8 w-10 max-sm:w-8 duration-150" />
        </a>
        <a
          href={social_info.tw.href}
          alt={social_info.tw.alt}
          data-aos="fade-up"
        >
          <AiFillTwitterSquare className="fill-white hover:fill-c-text-secondary-2 h-10 max-sm:h-8 w-10 max-sm:w-8 duration-150" />
        </a>
        <a
          href={social_info.in.href}
          alt={social_info.in.alt}
          data-aos="fade-up"
        >
          <AiFillLinkedin className="fill-white hover:fill-c-text-secondary-2 h-10 max-sm:h-8 w-10 max-sm:w-8 duration-150" />
        </a>
      </div>
    </article>
  );
};

const Form = ({ first_name, last_name, email, phone, message, send }) => {
  const form = useRef();
  const [isSend, setIsSend] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  // set time range for the message of sending email success
  const sendMsg = () => {
    setIsSend(!isSend);
    const timer = setTimeout(() => setIsSend(false), 3000);
    return () => clearTimeout(timer);
  };

  // empty input's values if the message has been send
  const emptyInputs = () => {
    setNameValue("");
    setNumberValue("");
    setEmailValue("");
    setTextareaValue("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_w9f0x6d",
        "template_np8bdln",
        form.current,
        "Im8HNahdBa3Sd0x1-"
      )
      .then(
        (result) => {
          console.log(result.text);
          sendMsg();
          emptyInputs();
        },
        (error) => {
          console.log(error.text);
          console.log("faild");
        }
      );
  };

  return (
    <form
      ref={form}
      className="basis-3/4  max-md:basis-full  max-md:w-full flex flex-col justify-center gap-12 h-full"
      onSubmit={sendEmail}
    >
      <div className="NAME&NUMBER flex gap-5">
        <input
          type="text"
          name="form_name"
          placeholder={first_name}
          className="text-c-text-secondary-2 p-3 max-sm:p-2 border-b-[1px] border-c-neutral-300 bg-transparent text-xl max-sm:text-xs font-thin w-full"
          data-aos="fade-up"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
        <input
          type="number"
          name="form_number"
          placeholder={phone}
          className="text-c-text-secondary-2 p-3 max-sm:p-2 border-b-[1px] border-c-neutral-300 bg-transparent text-xl max-sm:text-xs font-thin w-full"
          data-aos="fade-up"
          value={numberValue}
          onChange={(e) => setNumberValue(e.target.value)}
        />
      </div>
      <div className="EMAIL flex gap-5">
        <input
          type="email"
          name="form_email"
          placeholder={email}
          className="text-c-text-secondary-2 p-3 max-sm:p-2 border-b-[1px] border-c-neutral-300 bg-transparent text-xl max-sm:text-xs font-thin w-full"
          data-aos="fade-up"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
      </div>
      <textarea
        placeholder={message}
        className="text-c-text-secondary-2 p-3 max-sm:p-2 border-b-[1px] border-c-neutral-300 bg-transparent text-xl max-sm:text-xs font-thin w-full min-h-32"
        name="message"
        data-aos="fade-up"
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
      />
      <button
        className="bg-c-primary-900 p-3 rounded text-lg max-sm:text-base text-white duration-150 border-2 border-transparent hover:border-c-primary-700"
        data-aos="fade-up"
      >
        {send}
      </button>
      {isSend && (
        <p className="text-green-600 text-xs text-center my-0">
          We Recived Your Message
        </p>
      )}
    </form>
  );
};

const Contact = () => {
  const [t] = useTranslation();
  const contactInfo = t("landing_page.contact.informations", {
    returnObjects: true,
  });
  const contactForm = t("landing_page.contact.form", {
    returnObjects: true,
  });
  return (
    <section
      className="container mx-auto py-[70px] max-sm:py-14 px-1"
      id="contact"
    >
      <main className="flex max-md:flex-col items-end gap-12 h-full">
        <ContactInfo {...contactInfo} />
        <Form {...contactForm} />
      </main>
    </section>
  );
};

export default Contact;
