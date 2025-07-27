import { API_URL, PROJECT_ID } from "@/constants";
import { Client, Account, Databases } from "appwrite";

const client = new Client().setEndpoint(API_URL).setProject(PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };
