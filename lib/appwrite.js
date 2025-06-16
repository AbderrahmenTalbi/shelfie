import { Client, Account, Avatars, Databases } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("68484ed8002d908362f7")
  .setPlatform("dev.nova.shelfie");

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
