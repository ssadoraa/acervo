export enum TypeSearchUser {
    Nome = 'nome',
}

export const searchOptionsUser = Object.values(TypeSearchUser).map((value) => {
    const label = value.charAt(0).toUpperCase() + value.slice(1);
    const placeholder = `Procure por ${label.toLowerCase()}...`;
    return { label, value, placeholder };
});