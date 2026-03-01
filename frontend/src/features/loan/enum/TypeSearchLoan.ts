export enum TypeSearchLoan {
    Nome = 'nome',
}

export const searchOptionsLoan = Object.values(TypeSearchLoan).map((value) => {
    const label = value.charAt(0).toUpperCase() + value.slice(1);
    const placeholder = `Procure por ${label.toLowerCase()}...`;
    return { label, value, placeholder };
});