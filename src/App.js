import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './Config/Routes';

import SidebarMenu from './Layout/SidebarMenu/sidebarMenu';
import Login from './pages/Auth/login';


function App() {

  const router = useRoutes(routes)

  return (
    <div className="App">
      {router}
      {/* <Login/> */}
      {/* <SidebarMenu/> */}
      {/* <h2>hello</h2> */}
    </div>
  );
}

export default App;
