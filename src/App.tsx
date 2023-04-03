import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { SearchModal } from './Search';
import { Router } from "@solidjs/router";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Router>
          click : <SearchModal />
        </Router> 
      </header>
         
    </div>
  );
};

export default App;
