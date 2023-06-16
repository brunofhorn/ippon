import axios from "axios";

export const api = axios.create({ baseURL: "http://ippon.sa-east-1.elasticbeanstalk.com/api/v1" });
