import { api } from "../../../shared/service/api";


export const getCategories = async (): Promise<string[]> => {
  try {
    const response = await api.get("/categories");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    return [];
  }
};
