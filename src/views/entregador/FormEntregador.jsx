import React, { Component } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, FormRadio, FormGroup, Icon, FormSelect } from 'semantic-ui-react';

const Options = [
    { key: 'ac', value: 'ac', text: 'Acre' },
    { key: 'al', value: 'al', text: 'Alagoas' },
    { key: 'ap', value: 'ap', text: 'Amapá' },
    { key: 'am', value: 'am', text: 'Amazonas' },
    { key: 'ba', value: 'ba', text: 'Bahia' },
    { key: 'ce', value: 'ce', text: 'Ceará' },
    { key: 'df', value: 'df', text: 'Distrito Federal' },
    { key: 'es', value: 'es', text: 'Espírito Santo' },
    { key: 'go', value: 'go', text: 'Goiás' },
    { key: 'ma', value: 'ma', text: 'Maranhão' },
    { key: 'mt', value: 'mt', text: 'Mato Grosso' },
    { key: 'ms', value: 'ms', text: 'Mato Grosso do Sul' },
    { key: 'mg', value: 'mg', text: 'Minas Gerais' },
    { key: 'pa', value: 'pa', text: 'Pará' },
    { key: 'pb', value: 'pb', text: 'Paraíba' },
    { key: 'pr', value: 'pr', text: 'Paraná' },
    { key: 'pe', value: 'pe', text: 'Pernambuco' },
    { key: 'pi', value: 'pi', text: 'Piauí' },
    { key: 'rj', value: 'rj', text: 'Rio de Janeiro' },
    { key: 'rn', value: 'rn', text: 'Rio Grande do Norte' },
    { key: 'rs', value: 'rs', text: 'Rio Grande do Sul' },
    { key: 'ro', value: 'ro', text: 'Rondônia' },
    { key: 'rr', value: 'rr', text: 'Roraima' },
    { key: 'sc', value: 'sc', text: 'Santa Catarina' },
    { key: 'sp', value: 'sp', text: 'São Paulo' },
    { key: 'se', value: 'se', text: 'Sergipe' },
    { key: 'to', value: 'to', text: 'Tocantins' },
];

export default class FormEntregador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ativo: ''
        };
    }

    render() {

        return (

            <div>

                <div style={{ marginTop: '3%' }}>

                    <Container textAlign='justified' >

                        <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

                        <div style={{ marginTop: '4%' }}>

                            <Form>

                                <Form.Group >

                                    <Form.Input
                                        required
                                        fluid
                                        label='Nome'
                                        maxLength="100"
                                        width={6}
                                    />

                                    <Form.Input
                                        required
                                        fluid
                                        label='CPF'
                                        width={5}>
                                        <InputMask
                                            required
                                            mask="999.999.999-99"
                                        />
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='RG'
                                        maxLength='9'
                                        width={5}
                                    />

                                </Form.Group>

                                <Form.Group>

                                    <Form.Input
                                        fluid
                                        label='DT Nascimento'
                                        width={3}
                                    >
                                        <InputMask
                                            mask="99/99/9999"
                                            maskChar={null}
                                            placeholder="Ex: 20/03/1985"
                                        />
                                    </Form.Input>

                                    <Form.Input
                                        required
                                        fluid
                                        label='Fone Celular'
                                        width={4}>
                                        <InputMask
                                            mask="(99) 9999.9999"
                                        />
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Fone Fixo'
                                        width={4}>
                                        <InputMask
                                            mask="(99) 9999.9999"
                                        />
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='QTD Entregas Realizadas'
                                        width={3}
                                    />

                                    <Form.Input
                                        fluid
                                        label='Valor por Frete'
                                        width={3}
                                    />

                                </Form.Group>

                                <FormGroup>

                                    <Form.Input
                                        fluid
                                        label='Rua'
                                        width={13}
                                    />
                                    <Form.Input
                                        fluid
                                        label='Número'
                                        width={3}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Form.Input
                                        fluid
                                        label='Bairro'
                                        width={7}
                                    />

                                    <Form.Input
                                        fluid
                                        label='Cidade'
                                        width={7}
                                    />
                                    <Form.Input
                                        fluid
                                        label='CEP'
                                        width={2}
                                    />

                                </FormGroup>

                                <FormGroup>
                                    <FormSelect
                                        fluid
                                        label='UF'
                                        options={Options}
                                        placeholder='Selecione'
                                        width={16}
                                    />

                                </FormGroup>

                                <FormGroup>

                                    <Form.Input
                                        fluid
                                        label='Complemento'
                                        width={16}
                                    />
                                </FormGroup>

                                <FormGroup inline>
                                    <label>Ativo:</label>
                                    <FormRadio
                                        label='Sim'
                                        name='ativo'
                                        value='sim'
                                        checked={this.state.ativo === 'sim'}
                                        onChange={() => this.setState({ ativo: 'sim' })}
                                    />
                                    <FormRadio
                                        label='Não'
                                        name='ativo'
                                        value='nao'
                                        checked={this.state.ativo === 'nao'}
                                        onChange={() => this.setState({ ativo: 'nao' })}
                                    />

                                </FormGroup>
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

}
