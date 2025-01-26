import { environment } from "../../environment";
import { DEVELOPMENT } from "../misc/consts";

export const URL_API = environment === DEVELOPMENT ? "http://localhost:8080":"https://developers-terminalcore-api.fly.dev";