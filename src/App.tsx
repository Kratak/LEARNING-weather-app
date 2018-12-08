import * as React from 'react'
import { BodyWrapper, MainArticle } from './components/body'
import { StartButton } from './components/buttons'
import { HTMLglob } from './styles/globalStyles'

class App extends React.Component {
  public render() {
    return (
      <BodyWrapper>
        <MainArticle>
          <StartButton />
          <HTMLglob />
        </MainArticle>
      </BodyWrapper>
    );
  }
}

export default App;
