import React from 'react'
import './App.css';

// Components
import { PhotoList } from './components/PhotoList';
import { Header } from './components/Header';

export const App = function App() {
  return (
    <React.Fragment>
      < Header />
      < PhotoList />
    </React.Fragment>
  );
}
