import React from 'react';
import styled from 'styled-components'
import { EnvioMensagem } from './components/EnvioMensagem';
import { Mensagem } from './components/Mensagem';



const ContainerAplicacao = styled.div`
  display: flex;
  width: 700px;
  height: 100vh;
  border: 1px solid black;
  flex-direction: column;
  background-color: #A8BBC6;
`

const ContainerMensagens = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
`

class App extends React.Component {

  state = {
    mensagens: []
  }

  adicionarMensagem = (mensagem) => {
    this.setState({ mensagens: [...this.state.mensagens, mensagem] })
  }

  apagarMensagem = (mensagem) => {
    this.setState({ mensagens: this.state.mensagens.filter(msg => msg !== mensagem) })
  }


  render() {
    return (
      <ContainerAplicacao>
        <ContainerMensagens>
          {
            this.state.mensagens.map((mensagem, index) => 
            <Mensagem apagarMensagem={this.apagarMensagem} mensagem={mensagem} key={index}/>)
          }
        </ContainerMensagens>
        <EnvioMensagem adicionarMensagem={this.adicionarMensagem} />
      </ContainerAplicacao>
    );
  }
}

export default App;