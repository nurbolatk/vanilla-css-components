import { Button } from './components/Button'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
      }}>
      <Button>Button Label</Button>
      <Button>Button Label</Button>
      <Button disabled>Button Label</Button>
    </div>
  )
}

export default App
