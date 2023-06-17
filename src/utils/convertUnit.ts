import { IUnit } from "@/interfaces/components";
import { IUnits } from "@/interfaces/response";

export const convertUnit = (data: IUnits) => {
    const dataConverted: IUnit = {
        id: data.id,
        avatar: data.logotipo,
        unitName: data.nomeUnidade,
        responsibleName: data.nomeResponsavel,
        zipCode: "",
        address: data.endereco?.rua,
        number: data.endereco?.numero.toString(),
        complement: data.endereco?.complemento,
        neighborhood: data.endereco?.bairro,
        city: data.endereco?.cidade,
        state: data.endereco?.estado,
        phone: `(${data.contato?.ddd}) ${data.contato?.telefone}`,
        email: data.contato?.email,
    };

    return dataConverted;
};
