import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './_pages/Home/Home.js';
import Stage from './_pages/Stage/Stage.js';
import Funclub from './_pages/Funclub/Funclub.js';
import Studio from './_pages/Studio/Studio.js';
import Backstage from './_pages/Backstage/Backstage.js';
import NotFound from './_pages/NotFound/NotFound.js';
import Config from './_pages/Config/Config.js';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Home />}/>
        <Route path='Stage' element={<Stage />}>

        </Route>
        <Route path='Funclub' element={<Funclub />}>

        </Route>
        <Route path='Studio' element={<Studio />}>

        </Route>
        <Route path='Backstage' element={<Backstage />}>

        </Route>
        <Route path="/Config" element={<Config />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
