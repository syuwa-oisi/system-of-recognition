import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './_pages/Home/Home.js';
import Stage from './_pages/Stage/Stage.js';
import Funclub from './_pages/Funclub/Funclub.js';
import Studio from './_pages/Studio/Studio.js';
import Backstage from './_pages/Backstage/Backstage.js';
import NotFound from './_pages/NotFound/NotFound.js';
import Config from './_pages/Config/Config.js';
import Backartist from './_pages/Back_artist/Backstage_artist.js';
import Backcostume from './_pages/Back_costume/Backstage_costume.js';
import Backequip from './_pages/Back_equipment/Backstage_equipment.js';
import Menu from './_components/menu/menu.js';
import Quiz from './_pages/quiz/quiz.js';
import Result from "./_pages/Result/Result.js";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route index element={<Home />}/>
        <Route path='Stage' element={<Menu/>}>
          <Route path='quiz' element={<Quiz/>}/>
          <Route path='result' element={<Result/>}/>
          <Route index element={<Stage/>}/>
        </Route>
        <Route path='Funclub' element={<Funclub />}>

        </Route>
        <Route path='Studio' element={<Menu />}>
          <Route path='artist' element={<Backartist/>}/>
          <Route path='costume' element={<Backcostume/>}/>
          <Route path='equip' element={<Backequip/>}/>
          <Route index element={<Studio />}/>
        </Route>
        <Route path='Backstage' element={<Menu />}>
          <Route path='artist' element={<Backartist/>}/>
          <Route path='costume' element={<Backcostume/>}/>
          <Route path='equip' element={<Backequip/>}/>
          <Route index element={<Backstage />}/>
        </Route>
        <Route path="Config" element={<Config />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
