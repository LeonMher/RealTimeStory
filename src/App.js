import './App.css';
import Story from './components/Story'
import { cloudyScenario, hazyScenario, rainyScenario, clearSkyScenario, snowyScenario } from './components/Scenario';


function App() {


  return (
    <div className="App">
      <Story
        cloudyScenario={cloudyScenario}
        hazyScenario={hazyScenario}
        rainyScenario={rainyScenario}
        clearSkyScenario={clearSkyScenario}
        snowyScenario={snowyScenario}
      />

    </div>
  );
}

export default App;
