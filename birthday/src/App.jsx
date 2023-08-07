import { useState } from 'react';
import data from './data'
import List from './List';

function App () {
  const [friends, setFriends] = useState(data);

  return (
    <main>
      <section className='container'>
        <h3>{friends.length} birthdays today</h3>
        <List friends={friends} />
        <button type='button' className='btn btn-block' onClick={() => setFriends([])}>clear all</button>

      </section>
    </main>
  );
};

export default App;
