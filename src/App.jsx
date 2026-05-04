import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogReading from './pages/BlogReading'
import Contact from './pages/Contact'
import SolutionsDetail from './pages/SolutionsDetail'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/read" element={<BlogReading />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solutions/:slug" element={<SolutionsDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
