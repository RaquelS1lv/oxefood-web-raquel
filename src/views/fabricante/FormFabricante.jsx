import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import InputMask from 'react-input-mask';
import MenuSistema from '../../MenuSistema';
import { Link,useLocation } from "react-router-dom";

export default function FormFabricante() {
    const { state } = useLocation();
    const [idFabricante, setIdFabricante] = useState();

    const [nome, setNome] = useState();
    const [endereco, setEndereco] = useState();
    const [valorMercado, setValorMercado] = useState();
    const [paginaWeb, setPaginaWeb] = useState();
    const [qtdFuncionarios, setQtdFuncionarios] = useState();
    const [inicioContrato, setInicioCotrato] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/fabricante" + state.id)
.then((response) => {
                           setNome(response.data.id)
                           setEndereco(response.data.endereco)
                           setValorMercado(response.data.valorMercado)
                           setPaginaWeb(response.data.paginaWeb)
                           setQtdFuncionarios(response.data.qtdFuncionarios)
                           setInicioCotrato(response.data.inicioContrato)
                          
            })
        }
}, [state])
function salvar() {

    let fabricanteRequest = {
         nome: nome,
         endereco: endereco,
         valorMercado: valorMercado,
         paginaWeb: paginaWeb,
         qtdFuncionarios: qtdFuncionarios,
         inicioContrato: inicioContrato

    }
    if (idFabricante != null) { //Alteração:
        axios.put("http://localhost:8080/api/fabricante/" + idFabricante, fabricanteRequest)
        .then((response) => { console.log('Fabricante alterado com sucesso.') })
        .catch((error) => { console.log('Erro ao alterar o fabricante.') })
    } else { //Cadastro:
        axios.post("http://localhost:8080/api/fabricante", fabricanteRequest)
        .then((response) => { console.log('Fabricante cadastrado com sucesso.') })
        .catch((error) => { console.log('Erro ao incluir um fabricante.') })
    }
}

return (

    <div>
    <MenuSistema tela={'Fabricante'} />
        <div style={{ marginTop: '3%' }}>

            <Container textAlign='justified' >

            { idFabricante === undefined &&
<h2> <span style={{color: 'darkgray'}}> Fabricante &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
}
{ idFabricante !== undefined &&
<h2> <span style={{color: 'darkgray'}}> Fabricante &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
}


                <Divider />

                <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group >

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    placeholder='Digite seu nome:'
                                    width={10}
                                    value={nome}
			                        onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Endereço'
                                    width={5}
                                    value={endereco}
			                        onChange={e => setEndereco(e.target.value)}
                                    >

                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Mercado'
                                    width={6}
                                    value={valorMercado}
			                        onChange={e => setValorMercado(e.target.value)} >
                                    

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Página Web'
                                    width={6} 
                                    value={paginaWeb}
			                        onChange={e => setPaginaWeb(e.target.value)} >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Quantidade de funcionários'
                                    width={6}
                                    placeholder='40'
                                    value={qtdFuncionarios}
                                    onChange={e => setQtdFuncionarios} >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Início Contrato'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={inicioContrato}
			                            onChange={e => setInicioCotrato(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                <Link to={'/list-fabricante'}>Voltar</Link>

                               
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}