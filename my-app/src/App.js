import './App.css';
import React from 'react';
import axios from 'axios';
import QueryCard from './Componenets/QueryCard'

function App() {
  /**
   * TODO: 
   * Add QueryCard window to app
   * Implement load_data function in LoadQueryCard.js
   */
   const [loading, setLoading] = React.useState(false);
   const [queries, setqueries] = React.useState([]);

   function handleMouseUp () {
     const searchString = window.getSelection.toString()
 
     setLoading(true);
    // setqueries("hi")
     axios.post(`/search`, { searchString })
       .then((response) => {
         console.log(response);
         setqueries(response.data)
       })
       .catch((err) => { console.log(err) })
       .finally(() => setLoading(false));
  }
   return(
    <div onMouseUp={handleMouseUp}> hi
      {queries.map(query => (
        <QueryCard query={query} />
      ))}
    </div>
  );
}
 

export default App;
