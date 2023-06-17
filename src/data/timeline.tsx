import { Badge } from "@/components/Badge";
import Store from "@/icons/outline/Store";
import StudentCap from "@/icons/outline/StudentCap";
import Users from "@/icons/outline/Users";

type ITimelineData = {
    id: number;
    title: string;
    description: string;
    icon: JSX.Element | JSX.Element[] | React.ReactNode | React.ReactNode[];
    badge?: JSX.Element | JSX.Element[] | React.ReactNode | React.ReactNode[];
    link?: {
        text: string;
        path?: string;
        disable?: boolean;
    };
};

export const timeline: ITimelineData[] = [
    {
        id: 1,
        title: "Unidades",
        description: "Cadastre unidades para conseguir vincular turmas",
        icon: <Store />,
        badge: <Badge text="Pendente" />,
        link: {
            text: "Cadastrar unidade(s)",
            path: "/units",
        },
    },
    {
        id: 2,
        title: "Turmas",
        description: "Adicione turmas nas unidades para conseguir incluir os alunos",
        icon: <Users />,
        badge: <Badge text="Pendente" />,
        link: {
            text: "Cadastrar turma(s)",
            disable: true,
        },
    },
    {
        id: 3,
        title: "Alunos",
        description: "Cadastre alunos e vincule as turmas",
        icon: <StudentCap />,
        badge: <Badge text="Pendente" />,
        link: {
            text: "Cadastrar aluno(s)",
            disable: true,
        },
    },
];
