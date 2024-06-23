// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Login with Google/i);
//   expect(linkElement).toBeInTheDocument();
// });


import React from 'react';
import { render, fireEvent,screen,waitFor } from '@testing-library/react';
import App from './App';

// Mocking window.location
const originalLocation = window.location;
delete window.location;
window.location = { ...originalLocation, href: '' };

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ user: 'test user' }),
  })
);

describe('App Component', () => {
  test('renders App component', () => {
    render(<App />);
    expect(screen.getByText(/Please log in to access the dashboard./i)).toBeInTheDocument();
  });

  test('renders login button when not logged in', () => {
    render(<App />);
    expect(screen.getByText(/Login with Google/i)).toBeInTheDocument();
  });

  test('login button redirects to Google auth', () => {
    render(<App />);
    const loginButton = screen.getByText(/Login with Google/i);
    fireEvent.click(loginButton);
    expect(window.location.href).toBe('/auth/google');
  });



  // test('renders HobbiesSelection component when logged in and showHobbiesSelection is true', async () => {
  //   await act(async () => {
  //     render(<App />);
  //     expect(screen.getByText(/Save/i)).toBeInTheDocument(); // Assuming there is a Save button in HobbiesSelection component
  //   });
  // });

  // test('renders Dashboard component when logged in and showHobbiesSelection is false', async () => {
  //   await act(async () => {
  //     render(<App />);
  //     expect(screen.getByText(/Dashboard/i)).toBeInTheDocument(); // Assuming there is a text 'Dashboard' in Dashboard component
  //   });
  // });
});
