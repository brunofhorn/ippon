import Checkin from "@/icons/outline/Checkin";
import CreditCard from "@/icons/outline/CreditCard";
import User from "@/icons/outline/User";
import Users from "@/icons/outline/Users";
import Home from "@/icons/solid/Home";
import { IMenuItem } from "@/interfaces/menu";

export const menus: IMenuItem[] = [
    { name: "Unidades", link: "/units", icon: <Home width={13} height={13} /> },
    { name: "Turmas", link: "/classes", icon: <Users width={13} height={13} /> },
    { name: "Alunos", link: "/students", icon: <User width={13} height={13} /> },
    { name: "Check-in", link: "/checkin", icon: <Checkin width={13} height={13} />, disable: true },
    { name: "Financeiro", link: "/financial", icon: <CreditCard width={13} height={13} />, disable: true },
    // { name: "Calendário", link: "/calendar", icon: <Calendar width={13} height={13} />, disable: true },
];
