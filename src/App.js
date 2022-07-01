

import {BrowserRouter, Link, Route, Routes, Switch} from 'react-router-dom'

import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {Home} from "./pages/Home";
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {NotFound} from "./pages/NotFound";
import {Movie} from "./pages/Movie";
import {Category} from "./pages/Category";
import {Recipe} from "./pages/Recipe";


function App() {
  return (
   <>
     <BrowserRouter basename={'/react-spa-route'}>
     <Header/>
     <main className={"container content"}>
             <Routes >
                     <Route  exact path='/' element={<Home/>} />
                     <Route path='/home' element={<Home/>} />
                     <Route path='/about' element={<About/>} />
                     <Route path='/contacts' element={<Contact/>} />
                     <Route path='*' element={<NotFound />} />
                     <Route path='/category/:name' element={<Category/>} />
                     <Route path={'meal/:id'} element={<Recipe/>} />



             </Routes>
     </main>
     <Footer/>
     </BrowserRouter>
   </>
  );
}

export default App;
