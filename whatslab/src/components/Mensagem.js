import React from 'react';
import styled from 'styled-components'

const ConteudoMensagem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`

const CaixaMensagem = styled.div`
  max-width:40%;
  height: 100%;
  padding: 15px;
  border-radius: 15px;
  text-align: ${props => props.posicaoMensagem};
  align-self: ${props => {
        if (props.posicaoMensagem === "direita") {
            return 'flex-end'
        } else {
            return 'flex-start'
        }
    }};
  display: flex;
  flex-direction: row;
  background-color: ${props => {
        if (props.posicaoMensagem === "direita") {
            return '#FE7E02'
        } else {
            return '#F9B24E'
        }
    }};
`

const ContainerUsuario = styled.div`
  font-weight: bold;
  margin-right: 10px;
`

export class Mensagem extends React.Component {

    duploClique = () => {
        if (window.confirm('Apagar mensagem?')) {
            this.props.apagarMensagem(this.props.mensagem)
        }
    }

    render() {
        let posicaoMensagem
        let usuario

        if (this.props.mensagem.usuario === "eu") {
            posicaoMensagem = "direita"
        } else {
            posicaoMensagem = "esquerda"
            usuario = <ContainerUsuario>{this.props.mensagem.usuario}</ContainerUsuario>
        }

        return (
            <ConteudoMensagem onDoubleClick={this.duploClique}>
                <CaixaMensagem posicaoMensagem={posicaoMensagem}>
                    {usuario}
                    {this.props.mensagem.texto}
                </CaixaMensagem>
            </ConteudoMensagem>
        );
    }
}

