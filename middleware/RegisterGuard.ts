
export default defineNuxtRouteMiddleware(async (route, from) => {
    console.log("local storage",localStorage);
    
    try{
         const users = localStorage?.getItem("user") || null ;
            if(users==null){
        console.log("Users are not in");
        return navigateTo('/')
    
    }
    }
    catch (error){
        localStorage
    };
    
    }
)