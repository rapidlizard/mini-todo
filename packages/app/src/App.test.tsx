import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders register form', () => {
  render(<App />);

  const emailInputLabel = screen.getByText('Email:');
  const passwordInputLabel = screen.getByText('Password:');
  const registerButton = screen.getByText('Register')
  
  expect(emailInputLabel).toBeInTheDocument();
  expect(passwordInputLabel).toBeInTheDocument();
  expect(registerButton).toBeInTheDocument();
});
