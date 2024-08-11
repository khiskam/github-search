import axios from "axios";

// import { GITHUB_ACCESS_TOKEN, GITHUB_API_URL } from "../constant";
import { GITHUB_API_URL } from "../constant";

export const axiosClient = axios.create({
  baseURL: GITHUB_API_URL,
  // headers: {
  //   Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
  // },
});
