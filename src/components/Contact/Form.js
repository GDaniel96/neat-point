import { useRef } from "react";
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
  border: 1px solid #707070;
  border-radius: 34px;
  display: block;
  width: 100%;
  text-align: center;
  padding: 10px;
`;

const TextArea = styled.textarea`
  border: 1px solid #707070;
  border-radius: 34px;
  width: 100%;
  text-align: center;
  resize: none;
`;

const Form = () => {
  const formRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();

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
      })
      .catch((error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <FormContainer onSubmit={submitForm} ref={formRef}>
      <Input type="text" placeholder="Nume" name="user_name"></Input>
      <Input type="email" placeholder="E-mail" name="user_email"></Input>
      <Input
        type="number"
        placeholder="Număr de telefon"
        name="user_phone"
      ></Input>
      <TextArea placeholder="Mesaj" rows={10} name="message"></TextArea>
      <Button>Trimite</Button>
    </FormContainer>
  );
};

export default Form;
