import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProject'
})
export class SearchProjectPipe implements PipeTransform {

  transform(projects:any, searchText:any): any {
    if (!projects) {
      return null
    }
    if (!searchText) {
      return projects
    }
    return projects.filter((project:any) => {
      return JSON.stringify(project).toLowerCase().includes(searchText.toLowerCase())
    })
  }

}
