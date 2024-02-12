import { Observable } from "rxjs";

export interface CountdownForm {
  title: string
  date: null | Date
  camelCaseTitle?: string
  titleChange: Observable<string>;
}
