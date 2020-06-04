import React from 'react'
import './Headline/Headline.css';
import './TextContent/TextContent.css'
import BlogList from './BlogList.js';
import Headline from "./Headline/Headline.js";

function App() {
  return <div className="wrapper">
    <Headline />
    <BlogList />
  </div>
}
export default App;
