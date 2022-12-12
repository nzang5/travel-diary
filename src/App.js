import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import data from './data'

console.log(data)

function App() {

  let dataElements 
  dataElements = data.map(item => {

    return(
      <Card key={item.id} item={item} />
    )
  })



  return (
    <div>
      <Navbar />
      {dataElements}
    </div>
  );
}

export default App;
