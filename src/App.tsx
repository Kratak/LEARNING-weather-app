import * as React from 'react'
import { BodyWrapper, MainArticle } from './components/body'
import Form from './components/form'
import { HTMLglob } from './styles/globalStyles'

class App extends React.Component {
  public render() {
    return (
        <BodyWrapper>
          <MainArticle>

            <Form/>
            <HTMLglob />
          </MainArticle>
        </BodyWrapper>
   
    )
  }
}

export default App;
