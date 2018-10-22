import { IArticle } from "./article";

export interface IArticlesResponse {
    articles: IArticle[], 
    articlesCount: number
}
