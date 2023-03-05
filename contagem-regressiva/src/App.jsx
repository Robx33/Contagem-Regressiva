import Title from './components/Title'
import Counter from './components/Counter'
import { Main, Container, Countdown } from './Styles.js'
import useCountdown from './hooks/UseCountdown'

import NewYear from './assets/NewYear.jpg'

function App() {

  const [day, hour, minute, second] = useCountdown("Jan 1, 2024 00:00:00")

  return (
    <Main style={{ backgroundImage: `url(${NewYear})` }}>
      <Container>
        <Title title='Contagem regressiva para 2024' />

        <Countdown>
          <Counter title='Dias' number={day} />
          <Counter title='Horas' number={hour} />
          <Counter title='Minutos' number={minute} />
          <Counter title='Segundos' number={second} />
        </Countdown>
      </Container>
    </Main>

  )
}

export default App
