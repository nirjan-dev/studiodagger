import React, { useState } from 'react';
import styled from '@emotion/styled';
import isEmail from 'validator/lib/isEmail';
import StyledButton from './ui/styledButton';
import Loading from './ui/loading';
import { string } from 'prop-types';

const StatusScreen = styled.div`
  .msg {
    text-align: center;
    font-weight: bold;
    font-size: 130%;
    color: ${props => props.theme.colors.primary};
    margin: 2rem 0 4rem;
  }
`;

const CustomForm = styled.form`
  margin-top: 2rem;
  .form-group {
    position: relative;
    margin: 1.5rem 0;
  }
  .error-msg {
    color: tomato;
    min-height: 1.2rem;
    margin: 0;
  }
  input,
  textarea {
    background: 0 0;
    border: none;
    border-bottom-color: currentcolor;
    border-bottom-style: none;
    border-bottom-width: medium;
    border-radius: 0;
    border-bottom: 2px solid ${props => props.theme.colors.primaryLight};
    margin-bottom: 1em;
    display: block;
    width: 100%;
    padding: 1rem 1rem;
    &:focus,
    &:active {
      border: none;
      border-bottom-color: currentcolor;
      border-bottom-style: none;
      border-bottom-width: medium;
      border-bottom: 2px solid ${props => props.theme.colors.primary};
      background: ${props => props.theme.colors.primaryExtraLight};
    }
  }
  label {
    display: block;
    font-weight: lighter;
    color: #666;
    position: absolute;
    top: 0;
    opacity: 0;
    transition: 0.3s opacity ease-out,
      0.3s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  textarea:focus + label,
  textarea:active + label,
  input:focus + label,
  input:active + label {
    transform: translateY(-25px);
    opacity: 1;
  }

  textarea {
    min-height: 10rem;
  }
`;

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [descriptionError, setDescriptionError] = useState<string | null>(null);

  const validateForm = function formValidation() {
    // reset form errors and validate again
    setNameError(null);
    setEmailError(null);
    setDescriptionError(null);

    if (name.length < 5) {
      setNameError('Name must be at  least 5 characters');
    }
    if (description.length < 10) {
      setDescriptionError('Description must be at least 10 characters');
    }
    if (!isEmail(email)) {
      setEmailError('Email is not valid');
    }
    if (name.length < 5 || description.length < 10 || !isEmail(email)) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = function submitHandler(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setSending(true);
    const body = new FormData();
    body.append('form-name', 'contact');
    body.append('name', name);
    body.append('email', email);
    body.append('description', description);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body,
    })
      .then(() => {
        setSending(false);
        setSent(true);
        //alert('Success!');
      })
      .catch(error => {
        console.error(error);
      });
  };

  let content;

  if (sent) {
    content = (
      <StatusScreen>
        <p className="msg">✔ Message Sent successfully....</p>
      </StatusScreen>
    );
  } else if (sending) {
    content = (
      <StatusScreen>
        <p className="msg">Sending message....</p>
        <Loading />
      </StatusScreen>
    );
  } else {
    content = (
      <CustomForm onSubmit={e => handleSubmit(e)}>
        <div className="form-group">
          <input
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            name="name"
            type="text"
            id="name"
          />
          <label htmlFor="name">Name</label>
          <p className="error-msg">{nameError}</p>
        </div>
        <div className="form-group">
          <input
            placeholder="Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
            type="text"
            id="email"
          />
          <label htmlFor="email">Email</label>
          <p className="error-msg">{emailError}</p>
        </div>
        <div className="form-group">
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            name="description"
            id="description"
            placeholder="Project Description"
          ></textarea>
          <label htmlFor="description">Description</label>
          <p className="error-msg">{descriptionError}</p>
        </div>
        <div className="form-group">
          <StyledButton type="submit">Send</StyledButton>
        </div>
      </CustomForm>
    );
  }

  return <section>{content}</section>;
}

export default ContactForm;
