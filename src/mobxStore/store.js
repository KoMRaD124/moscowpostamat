import {makeAutoObservable} from "mobx";

export class SearchStore {
    constructor() {
        makeAutoObservable(this)
    }
    tasks=[]
    reviews=[]
    setTasks(data){
        this.tasks=data
        console.log(this.tasks);
    }
    setReviews(data){
        this.reviews=data
        console.log(this.reviews);
    }
}
export const searchStore = new SearchStore()