import Header from './components/Header'
import Menu from './components/Menu'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Footer from './components/Footer'
import { H1, H2 } from './components/ui/Headings'
import Button from './components/ui/Button'

function App () {
  return (
    <>
      <Header>
        <H1>Bootcamp</H1>
      </Header>
      <Menu>
        <a href=''>Grade do Curso</a>
      </Menu>
      <Sidebar>
        <ul>
          <li>Introdução ao React.js</li>
          <li>JSX</li>
          <li>Styled Components</li>
        </ul>
      </Sidebar>
      <Content>
        <H2>Bootcamp</H2>
        <p>Conheça mais sobre como funciona o Bootcamp.</p>
        <Button kind='primary'>Registrar</Button>
        <Button kind='secondary'>Saber mais</Button>
      </Content>
      <Footer>
        B. Academy
        <a href='mailto:contato-inexistente@brainn.co'>Contato</a>
      </Footer>
    </>
  )
}

export default App
