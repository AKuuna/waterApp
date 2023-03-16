import './App.css';
import { Hello } from './components/Hello';
import { Dosage } from './components/Dosage';
import { DailyGoal } from './components/DailyGoal';
import { Reminder } from './components/Reminder';
import { Weather } from './components/Weather';
import { Weight } from './components/Weight';


function App() {
  return (
    <div className="App">
      <Hello />
      <DailyGoal />
      <Reminder />
      <Dosage />
      <Weather />
      <Weight />
    </div>
  );
}

export default App;
