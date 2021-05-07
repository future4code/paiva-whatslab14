import React from 'react';
import styled from 'styled-components'

const ContainerFormularioM = styled.form`
  display: grid;
  grid-template-columns: 10vw 1fr 5vw;
  gap: 10px;
  height: 6vh;
  padding: 10px;
`

const InputUsuario = styled.input`
  width: 10vw;
  padding: 5px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
`

const InputMensagem = styled.input`
  padding: 8px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
`

const BotaoEnviar = styled.button`
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #FE7E02;
`

export class EnvioMensagem extends React.Component {
    state = {
        inputUsuario: "",
        inputTexto: ""
    }


    handleNomeUsuario = (event) => {
        this.setState({ inputUsuario: event.target.value })
    }

    handleNomeTexto = (event) => {
        this.setState({ inputTexto: event.target.value })
    }

    aoEnviarMensagem = (event) => {
        event.preventDefault()
        const mensagem = {
            usuario: this.state.inputUsuario,
            texto: this.state.inputTexto
        }

        this.props.adicionarMensagem(mensagem)

        this.setState({ inputUsuario: "", inputTexto: "" })
    }

    render() {
        return (
            <ContainerFormularioM onSubmit={this.aoEnviarMensagem}>
                <InputUsuario type="text" placeholder={'Usuário'} onChange={this.handleNomeUsuario} value={this.state.inputUsuario} />
                <InputMensagem type="text" placeholder={'Mensagem'} onChange={this.handleNomeTexto} value={this.state.inputTexto} />
                <BotaoEnviar>Enviar</BotaoEnviar>
            </ContainerFormularioM>
        );
    }
}


