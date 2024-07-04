import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form,FormGroup, Icon, FormSelect } from 'semantic-ui-react';
import axios from "axios";
import MenuSistema from '../../MenuSistema';


const uflist = [
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

export default function FormEntregador() {

        const [nome, setNome] = useState();
        const [cpf, setCpf] = useState();
        const [rg, setRg] = useState();
        const [dataNascimento, setDataNascimento] = useState();
        const [foneCelular, setFoneCelular] = useState();
        const [foneFixo, setFoneFixo] = useState();
        const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
        const [valorFrete, setValorFrete] = useState();
        const [enderecoRua, setEnderecoRua] = useState();
        const [enderecoNumero, setEnderecoNumero] = useState();
        const [enderecoBairro, setEnderecoBairro] = useState();
        const [enderecoCidade, setEnderecoCidade] = useState();
        const [enderecoCep, setEnderecoCep] = useState();
        const [enderecoUf, setEnderecoUf] = useState();
        const [enderecoComplemento, setEnderecoComplemento] = useState();
        const [ativo, setAtivo] = useState();

        function salvar() {

            let entregadorRequest = {
                 nome: nome,
                 cpf: cpf,
                 rg: rg,
                 dataNascimento: dataNascimento,
                 foneCelular: foneCelular,
                 foneFixo: foneFixo,
                 qtdEntregasRealizadas: qtdEntregasRealizadas,
                 valorFrete: valorFrete,
                 enderecoRua: enderecoRua,
                 enderecoNumero: enderecoNumero,
                 enderecoBairro: enderecoBairro,
                 enderecoCidade: enderecoCidade,
                 enderecoCep: enderecoCep,
                 enderecoUf: enderecoUf,
                 enderecoComplemento: enderecoComplemento,
                 ativo: ativo
            }
            axios.post("http://localhost:8080/api/entregador", entregadorRequest)
            .then((response) => {
                 console.log('Cliente cadastrado com sucesso.')
            })
            .catch((error) => {
                 console.log('Erro ao incluir o um cliente.')
            })
        }
    

        return (

            <div>
             <MenuSistema tela={'entregador'} />

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
                                        value={nome}
                                        onChange={e => setNome(e.target.value)}
                                    />

                                    <Form.Input
                                        required
                                        fluid
                                        label='CPF'
                                        width={5}>
                                        <InputMask
                                            required
                                            mask="999.999.999-99"
                                            value={cpf}
                                            onChange={e => setCpf(e.target.value)}
                                        />
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='RG'
                                        maxLength='9'
                                        width={5}
                                        value={rg}
                                        onChange={e => setRg(e.target.value)}
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
                                            value={dataNascimento}
                                            onChange={e => setDataNascimento(e.target.value)}
                                        />
                                    </Form.Input>

                                    <Form.Input
                                        required
                                        fluid
                                        label='Fone Celular'
                                        width={4}>
                                        <InputMask
                                            mask="(99) 9999.9999"
                                            value={foneCelular}
                                            onChange={e => setFoneCelular(e.target.value)}

                                        />
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Fone Fixo'
                                        width={4}>
                                        <InputMask
                                            mask="(99) 9999.9999"
                                            value={foneFixo}
                                            onChange={e => setFoneFixo(e.target.value)}
                                        />
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='QTD Entregas Realizadas'
                                        width={3}
                                        value={qtdEntregasRealizadas}
                                        onChange={e => setQtdEntregasRealizadas(e.target.value)}
                                    />

                                    <Form.Input
                                        fluid
                                        label='Valor por Frete'
                                        width={3}
                                        value={valorFrete}
                                        onChange={e => setValorFrete(e.target.value)}
                                    />

                                </Form.Group>

                                <FormGroup>

                                    <Form.Input
                                        fluid
                                        label='Rua'
                                        width={13}
                                        value={enderecoRua}
                                        onChange={e => setEnderecoRua(e.target.value)}
                                    />
                                    <Form.Input
                                        fluid
                                        label='Número'
                                        width={3}
                                        value={enderecoNumero}
                                        onChange={e => setEnderecoNumero(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Form.Input
                                        fluid
                                        label='Bairro'
                                        width={7}
                                        value={enderecoBairro}
                                        onChange={e => setEnderecoBairro(e.target.value)}
                                    />

                                    <Form.Input
                                        fluid
                                        label='Cidade'
                                        width={7}
                                        value={enderecoCidade}
                                        onChange={e => setEnderecoCidade(e.target.value)}
                                    />
                                    <Form.Input
                                        fluid
                                        label='CEP'
                                        width={2}
                                        value={enderecoCep}
                                        onChange={e => setEnderecoCep(e.target.value)}
                                    />

                                </FormGroup>

                                <FormGroup>
                                    <FormSelect
                                        fluid
                                        label='UF'
                                        options={uflist}
                                        placeholder='Selecione'
                                        width={16}
                                        value={enderecoUf}
                                        onChange={e => setEnderecoUf(e.target.value)}
                                    />

                                </FormGroup>

                                <FormGroup>

                                    <Form.Input
                                        fluid
                                        label='Complemento'
                                        width={16}
                                        value={enderecoComplemento}
                                        onChange={e => setEnderecoComplemento(e.target.value)}
                                    />
                                </FormGroup>

                                <Form.Group inline>

                                    <label>Ativo: </label>

                                    <Form.Radio
                                        label='Sim'
                                        checked={ativo}
                                        onChange={e => setAtivo(true)}
                                    />

                                    <Form.Radio
                                        label='Não'
                                        checked={!ativo}
                                        onChange={e => setAtivo(false)}
                                    />

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


