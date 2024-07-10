import './App.css';
// import Props from './components/Props';
// import TernaryOperator from './components/TernaryOperator';
// import Events from './components/Events';
// import Lists from './components/Lists';
// import FormHandling from './components/FormHandling';
// import UseStateHook from './components/UseStateHook';
// import UseEffectHook from './components/UseEffectHook';
// import UseRefHook from './components/UseRefHook';
// import UseReducerHook from './components/UseReducerHook';
// import UseContextHook from './components/UseContextHook';
// import UseMemoHook from './components/UseMemoHook';
// import UseCallbackHook from './components/UseCallbackHook';


// import {Routes, Route} from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Error from './components/Error';
import FetchAPI from './components/FetchAPI';
import AxiosAPI from './components/AxiosAPI';


function App() {

  return (

    <div className="App">

      {/* <Props name="Haseeb J"/>
      <TernaryOperator isGoal={false}/>
      <Events />
      <Lists />
      <FormHandling />
      <UseStateHook />
      <UseEffectHook />
      <UseRefHook />
      <UseReducerHook />
      <UseContextHook />
      <UseMemoHook />
      <UseCallbackHook /> */}

      {/* <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<Error />}/>
      </Routes> */}

      <FetchAPI />
      <AxiosAPI />
    </div>

  );
}

export default App;
