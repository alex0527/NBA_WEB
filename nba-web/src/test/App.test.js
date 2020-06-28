import React from 'react';
import '../styles/App.css';

import TopNavBar from './TopNavBar';
import App from '../components/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
