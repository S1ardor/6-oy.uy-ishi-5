import './App.css';
import { Fragment } from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { MainCard } from './components/Main/MainCard';

function App() {
  return (
    <Fragment>
          < Header/>
          < Main />
    </Fragment>
  );
}

export default App;
