import Header from './components/Header'
import Menu from './components/Menu'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Footer from './components/Footer'
import { H1, H3 } from './components/ui/Headings'
import Button from './components/ui/Button'
import { Article } from './types'

function App () {
  const articles: Article[] = [
    {
      id: 1,
      title: 'Introdução ao React.js',
      content: (
        <>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
            alt='React Logo'
          />
          <H3>Declarativo</H3>
          <p>
            React faz com que a criação de UIs interativas seja uma tarefa
            fácil. Crie views simples para cada estado na sua aplicação, e o
            React irá atualizar e renderizar de forma eficiente apenas os
            componentes necessários na medida em que os dados mudam.
          </p>
        </>
      )
    },
    {
      id: 2,
      title: 'Hooks',
      content: (
        <>
          <img
            src='https://thumbs.dreamstime.com/b/evil-robot-full-growth-humanoid-futuristic-evil-robot-full-growth-humanoid-futuristic-cyborg-killer-flat-illustration-154002920.jpg'
            alt='GitHub Copilot is evil'
          />
          <p>
            Melhor aprender sobre Hooks para o GitHub Co-pilot não roubar meu
            emprego. 😰
          </p>
          <a href='https://www.google.com/search?q=vagas+de+emprego'>
            Mudar de profissão
          </a>
        </>
      )
    },
    {
      id: 3,
      title: 'Styled Components',
      content: (
        <>
          <img
            src='https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png'
            alt='Styled Components Logo'
          />
          <p>
            Styled Components serve pra dar um tapa no visu. Exemplo de botões:
          </p>
          <div className='buttons'>
            <Button kind='primary'>Primary</Button>
            <Button kind='secondary'>Secondary</Button>
          </div>
        </>
      )
    }
  ]

  return (
    <>
      <Header>
        <H1>Bootcamp</H1>
      </Header>
      <Menu>
        <a href=''>Grade do Curso</a>
      </Menu>
      <Sidebar articles={articles} />
      <Content article={articles[0]} />
      <Footer>
        B. Academy
        <a href='mailto:contato-inexistente@brainn.co'>Contato</a>
      </Footer>
    </>
  )
}

export default App
