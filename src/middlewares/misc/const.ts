import { environment } from "../../environment";

export const API_URL: string = environment === "development" ? 'http://localhost:8080' : 'https://nhexa-api.fly.dev';
export const CLIENT_URL: string = environment === "development" ? 'http://localhost:5175' : 'https://laruina.cl';
export const ACCOUNTS_URL: string = environment === "development" ? 'http://localhost:5174' : 'https://accounts.nhexa.cl';
export const DOWNLOAD_URL: string = environment === "development" ? 'http://localhost:5176' : 'https://download.nhexa.cl';