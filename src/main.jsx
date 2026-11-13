import { createRoot } from 'react-dom/client'
import  Home   from './pages/App'
import { browser } from 'react-dom'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Home />
    </BrowserRouter>
)  