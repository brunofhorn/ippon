import Config from "@/icons/Config";
import InfoCircle from "@/icons/InfoCircle";
import Lamp from "@/icons/Lamp";
import Logout from "@/icons/Logout";
import { IMenuItem } from "@/interfaces/menu";

export const extra_menus: IMenuItem[] = [
    { name: "Configuração", link: "/settings", icon: <Config width={13} height={13} />, extra: true },
    { name: "Dark Theme", link: "/dark", icon: <Lamp width={13} height={13} />, extra: true },
    { name: "Ajuda", link: "/help", icon: <InfoCircle width={13} height={13} />, extra: true },
    { name: "Sair", link: "/logout", icon: <Logout width={13} height={13} />, extra: true },
];
