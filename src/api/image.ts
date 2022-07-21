import axios from "axios";

const imageInstance = axios.create({
  baseURL: "https://angular-server.vercel.app/api/upload"
})

