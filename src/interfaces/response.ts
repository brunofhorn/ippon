export interface IUnits {
    id: number;
    logotipo: string;
    nomeUnidade: string;
    nomeResponsavel: string;
    endereco: IAddress;
    contato: IContact;
    idUsuario: string;
    isActive: boolean;
    quantidadeTurmas: number;
    fotoAlunos: string[];
}

type IAddress = {
    rua: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
};

type IContact = {
    ddd: number;
    telefone: string;
    email: string;
};
