import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Button from "../common/Button";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  border: 1px solid #c2bebe;
  border-radius: 34px;
  display: block;
  width: 100%;
  text-align: center;
  padding: 10px;
  background-color: #fafafa;
`;

const TextArea = styled.textarea`
  border: 1px solid #c2bebe;
  border-radius: 34px;
  width: 100%;
  text-align: center;
  resize: none;
  background-color: #fafafa;
`;

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        formRef.current,
        process.env.PUBLIC_KEY
      )
      .then((result) => {
        console.log(result);
        alert(
          "Vă mulțumim pentru că ați intrat în contact cu noi, vom reveni la dumneavoastră în cel mai scurt timp!"
        );
        e.target.reset();
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <FormContainer onSubmit={submitForm} ref={formRef}>
      <Input
        type="text"
        placeholder="Nume"
        name="user_name"
        disabled={isLoading}
        required
      />
      <Input
        type="email"
        placeholder="E-mail"
        name="user_email"
        disabled={isLoading}
        required
      />
      <Input
        type="text"
        placeholder="Număr de telefon"
        name="user_phone"
        disabled={isLoading}
        required
      />
      <TextArea
        placeholder="Mesaj"
        rows={10}
        name="message"
        disabled={isLoading}
        required
      ></TextArea>
      <Button disabled={isLoading}>Trimite</Button>
    </FormContainer>
  );
};

export default Form;
