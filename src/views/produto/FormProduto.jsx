import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Divider, Form, Icon, TextArea, FormField } from 'semantic-ui-react';

export default function FormProduto() {
<<<<<<< HEAD
    const [titulo, setTitulo] = useState();
    const [codigo, setCodigo] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
    const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();
=======
    const [titulo, settitulo] = useState();
    const [codigo, setCodigodoproduto] = useState();
    const [descricao, setdescricao] = useState();
    const [ValorUnitario, setValorUnitario] = useState();
    const [tempoEntregaMinimo, settempoEntregaMinimo] = useState();
    const [tempoEntregaMaximo, settempoEntregaMaximo] = useState();
>>>>>>> f1db2ae13c13b4ce6f73e8af56127cc808fc9986

    function salvar() {

		let produtoRequest = {
		     titulo: titulo,
<<<<<<< HEAD
		     codigo: codigo,
		     descricao: descricao,
		     valorUnitario: valorUnitario,
=======
		     Codigodoproduto: codigo,
		     descricao: descricao,
		     ValorUnitario: ValorUnitario,
>>>>>>> f1db2ae13c13b4ce6f73e8af56127cc808fc9986
             tempoEntregaMinimo: tempoEntregaMinimo,
             tempoEntregaMaximo: tempoEntregaMaximo

		}
	
		axios.post("http://localhost:8080/api/produto", produtoRequest)
		.then((response) => {
		     console.log('Produto cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um produto.')
		})
	}

 
    return (

        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group >

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    maxLength="100"
                                    placeholder='Informe o título do produto'
                                    width={10}
                                    value={titulo}
<<<<<<< HEAD
			                        onChange={e => setTitulo(e.target.value)}
=======
			                        onChange={e => settitulo(e.target.value)}
>>>>>>> f1db2ae13c13b4ce6f73e8af56127cc808fc9986
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do produto'
                                    placeholder='Informe o código do Produto'
                                    width={5}
                                    value={codigo}
<<<<<<< HEAD
			                        onChange={e => setCodigo(e.target.value)}
=======
			                        onChange={e => setCodigodoproduto(e.target.value)}
>>>>>>> f1db2ae13c13b4ce6f73e8af56127cc808fc9986
                                    >

                                </Form.Input>

                            </Form.Group>

                            <FormField
                                control={TextArea}
                                label='Descrição'
                                placeholder='Informe a descrição do produto'
                                value={descricao}
<<<<<<< HEAD
			                    onChange={e => setDescricao(e.target.value)} />
=======
			                    onChange={e => setdescricao(e.target.value)} />
>>>>>>> f1db2ae13c13b4ce6f73e8af56127cc808fc9986

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitário'
                                    width={6}
<<<<<<< HEAD
                                    value={valorUnitario}
=======
                                    value={ValorUnitario}
>>>>>>> f1db2ae13c13b4ce6f73e8af56127cc808fc9986
			                        onChange={e => setValorUnitario(e.target.value)} >
                                    

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínimo em Minutos'
                                    width={6}
                                    placeholder='30' 
                                    value={tempoEntregaMinimo}
<<<<<<< HEAD
			                        onChange={e => setTempoEntregaMinimo(e.target.value)} >
=======
			                        onChange={e => settempoEntregaMinimo(e.target.value)} >
>>>>>>> f1db2ae13c13b4ce6f73e8af56127cc808fc9986
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos'
                                    width={6}
                                    placeholder='40'
                                    value={tempoEntregaMaximo}
<<<<<<< HEAD
                                    onChange={e => setTempoEntregaMaximo} >
=======
                                    onChange={e => settempoEntregaMaximo} >
>>>>>>> f1db2ae13c13b4ce6f73e8af56127cc808fc9986
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
                                Voltar
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