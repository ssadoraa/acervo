export enum TypeSearchBook {
    Autor = 'autor',
    Ano = 'ano',
    Categoria = 'categoria',
    Editora = 'editora',
    Titulo = 'titulo',
}

export const searchOptionsBook = Object.values(TypeSearchBook).map((value) => {
    const label = value.charAt(0).toUpperCase() + value.slice(1);
    const placeholder = `Procure por ${label.toLowerCase()}...`;
    return { label, value, placeholder };
});