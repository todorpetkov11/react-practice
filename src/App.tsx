import './App.css';
import ImageSlider from './exercise/imageSlider/imageSlider';

const data = [
  'https://static5.depositphotos.com/1006844/519/i/450/depositphotos_5196564-stock-photo-beautiful-young-woman-kissing-a.jpg',
  'https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?cs=srgb&dl=pexels-dana-tentis-370799.jpg&fm=jpg',
  'https://images.all-free-download.com/images/graphiclarge/abstract_background_310801.jpg'
]

function App() {
  return (
    <div className="container">
      <ImageSlider data={data} />
    </div>
  )
}

export default App;
