import HomePage from './components/pages/HomePage'
import { NoteProvider } from './NoteContext'

function App() {
  return (
    <NoteProvider>
      <HomePage />
    </NoteProvider>
  )
}
export default App
