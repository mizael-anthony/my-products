export class API{
    static async fetchData(url){
        const response =  await fetch(url)
        return response
    }
}
