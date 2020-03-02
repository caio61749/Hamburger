import React from 'react';
import AppHeader from '../../components/header';
import Filter from '../../components/filter';
import CardBurger from '../../components/cardBurger';
function App() {
  return (
      <div>
          <AppHeader/>
          <Filter/>
          <CardBurger/>
          <CardBurger/>
          <CardBurger/>
          <CardBurger/>
          <CardBurger/>
      </div>
  )
}

export default App;