import './styles/App.css';

import { Switch, Route } from 'react-router-dom';
import BlogPage from './pages/blog/BlogPage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/blog'>
          <BlogPage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/contact'>
          <ContactPage />
        </Route>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='*'>
          <h2>Opps page not found 404 </h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
