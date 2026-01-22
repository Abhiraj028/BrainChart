import { Button } from './components/ui/Button'
import './App.css'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <>
      <Button startIcon={<PlusIcon size="md"/>} variant="primary" size="md" text="Click Me" onClick={() => {}} />
      <br></br>
      <Button variant="secondary" size="md" text="Click Me" onClick={() => {}} endIcon={<ShareIcon size="md"/>}/>

    </>
  )
}

export default App
