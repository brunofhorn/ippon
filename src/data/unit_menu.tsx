import Trash from "@/icons/outline/Trash";
import User from "@/icons/outline/User";
import Users from "@/icons/outline/Users";
import XClose from "@/icons/outline/XClose";
import Home from "@/icons/solid/Home";

export const unit_menus = [
    {
        id: 1,
        text: "Conferir unidade",
        icon: <Home width={13} height={13} />,
        iconHover: <Home width={13} height={13} color="#FFFFFF" />,
        onClick: () => console.log("teste"),
    },
    {
        id: 2,
        text: "Conferir turma(s)",
        icon: <Users width={13} height={13} />,
        iconHover: <Users width={13} height={13} color="#FFFFFF" />,
        onClick: () => console.log("teste"),
    },
    {
        id: 3,
        text: "Conferir aluno(s)",
        icon: <User width={13} height={13} />,
        iconHover: <User width={13} height={13} color="#FFFFFF" />,
        onClick: () => console.log("teste"),
    },
    {
        id: 1,
        text: "Inativar unidade",
        icon: <XClose width={13} height={13} />,
        iconHover: <XClose width={13} height={13} color="#FFFFFF" />,
        onClick: () => console.log("teste"),
    },
    {
        id: 1,
        text: "Excluir",
        icon: <Trash width={13} height={13} />,
        iconHover: <Trash width={13} height={13} color="#FFFFFF" />,
        onClick: () => console.log("teste"),
    },
];
