export function getMask(mask: string): string {
    switch (mask) {
        case "cpf":
            return "\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}";
        case "telefone":
            return "\\(\\d{2}\\) \\d{4,5}-\\d{4}";
        case "cep":
            return "\\d{5}-\\d{3}";
        default:
            return "";
    }
}
