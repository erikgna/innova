import axios, { AxiosInstance } from "axios";

export const api = axios.create({
  baseURL: "https://swapi.dev/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllPeoples = () => api.get(`/people`);
export const getCharacter = (id: string) => api.get(`/people/${id}`);
export const getMovie = (id: string) => api.get(`/films/${id}`);
