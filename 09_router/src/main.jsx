import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path='/' element={<Layout />} >
//       <Route path='/' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       </Route>

//     </Route>
//   )
// )



// const router=createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[{
//       path:'/',
//       element:<Home/>

//     },{
//       path:"About",
//       element:<About/> 
//     },{
//       path:"Contact",
//       element:<Contact/>
//     }]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>} >

      <Route index element={ <Home/> }/>
      <Route path ='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
    

    </Route>
  </Routes>
</BrowserRouter>

  </React.StrictMode>,
)
