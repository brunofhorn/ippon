import Calendar from "@/icons/Calendar";
import Checkin from "@/icons/Checkin";
import CreditCard from "@/icons/CreditCard";
import Home from "@/icons/Home";
import User from "@/icons/User";
import Users from "@/icons/Users";
import { IMenuItem } from "@/interfaces/menu";

export const menus: IMenuItem[] = [
    { name: "Unidades", link: "/units", icon: <Home width={13} height={13} /> },
    { name: "Turmas", link: "/classes", icon: <Users width={13} height={13} /> },
    { name: "Alunos", link: "/students", icon: <User width={13} height={13} /> },
    { name: "Check-in", link: "/checkin", icon: <Checkin width={13} height={13} />, disable: true },
    { name: "Financeiro", link: "/financial", icon: <CreditCard width={13} height={13} />, disable: true },
    // { name: "Calendário", link: "/calendar", icon: <Calendar width={13} height={13} />, disable: true },
];
