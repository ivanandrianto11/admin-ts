import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Auth from './routes/auth'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Auth />} />
      </Routes>
    </Router>
  )
}

export default App
