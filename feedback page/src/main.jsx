import ReactDOM from 'react-dom/client';
import './app.css';
import Navbar from './components/Navbar';
import FeedbackForm from './components/FeedbackForm';

const App = () => (
  <>
    <Navbar />
    <FeedbackForm />
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App/> 
);
