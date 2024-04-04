import conf from "../conf/conf.js";
import {Client , Account ,ID} from "appwrite"

export class AuthService{

    client = new Client();
    account;


    constructor(){
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteprojectid)
    }

    async createAccount({email,password,name}){
        try{

            const userAccount= await this.account.create(ID.unique(),email,password,name);

            if(userAccount){
                //call another method
            }
            else{
                return userAccount
            }


        }
        catch(error){
            throw error;
        }
    }

    async login({email,password,name}){
        try{
            await this.account.createEmailSession(email,password);

        }
        catch (error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get()
        }
        catch(error){
            console.log("appwrite service :: getCurrentUser error", error);
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        }
        catch(error){
            console.log("appwrite service ::logout :: error", error);
        }
    }
 

}



const authService = new AuthService();

export default authService;
