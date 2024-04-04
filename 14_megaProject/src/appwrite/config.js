import conf from "../conf/conf";
import {Client,ID , Databases , Storage, Query} from 'appwrite';

export class Service{
    client = new Client();

    databases;
    bucket;

    constructor(){
        this.client 
        .setEndpoint(conf.appwriteurl)
        .setProject(conf.appwriteprojectid)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost(title,slug,content,featuredImage,status,userId){
        try{
            return await this.databases.createDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug,
                {
                    title,content,featuredImage, status, userId,
                }
            )
        }
        catch(error){
            console.log("appwrite service :: createPost :: error",error);
        }
    }


    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug,
                {
                    title,content,
                    featuredImage, status,               
                } 
            )
        }
        catch(error){

        }
    }

    async deletePost (slug){
        try{
            await this.database.deleteDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug
            )
        }
        catch(error){
            console.log("Appwrite service :: deletepost :: error", error);
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                queries,
            )

        }
        catch(error){
            console.log("APPWRITE SERVICE :: GETPOSTS :: ERROR", error)
        }
    }

    async uploadFile(file){
        try{
            await this.bucket.createFile(
                conf.appwritebucketid,
                ID.unique(),
                file
            )
        }
        catch(error){
            console.log("Appwrite :: uploadfile:: error", error)
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwritebucketid,
                fileId
            )
        }
        catch(error){
            console.log("appwrite service :: delete file:: error", error)
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwritebucketid,
            fileId
        )
    }

}


const service = new Service();

export default Service

