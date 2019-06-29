import React from 'react';
import './App.css';
import {User} from "../../models/User";
import Header from "../Header";

export interface AppProps {
  users: User[]
  selected: string
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
    </div>
  );
};

export default App;
