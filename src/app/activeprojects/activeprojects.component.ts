import { AfterViewInit ,OnInit, Component } from '@angular/core';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-activeprojects',
  imports: [MatPaginatorModule, MatSortModule],
  templateUrl: './activeprojects.component.html',
  styleUrl: './activeprojects.component.css'
})
export class ActiveprojectsComponent implements OnInit, AfterViewInit {
  DataComponent = new ActiveProjectsDataComponent();

  Projects : Project[] = this.DataComponent.projects;

  Size = this.Projects.length;

  cluster = document.getElementById('project-cluster');

  onPageEvent(event: PageEvent): void {
    if(this.cluster == null) this.cluster = document.getElementById('project-cluster');
    if(this.cluster == null ) return;
    let from = event.pageIndex * event.pageSize;
    let to = Math.min((event.pageIndex+1) * event.pageSize, event.length);
    
    this.cluster.innerHTML = ``;

    let selected_data = this.Projects.slice(from,to);
    
    for(let dataIndex in selected_data)
    {
      let data = selected_data[+dataIndex];
      
      this.cluster.innerHTML +=
       `
        <div class='project-card ${data.finished?'finished':'inprogress'}'>
          <div class='project-background' style='background-image: url(${data.imageurl});'></div>
          <h1>${data.name}</h1>
          <p>Associated members:<br>${data.associated.join(', ')}</p>
        </div>
       `;
       
    }
    
  }


  ngOnInit(): void {
    this.Size = this.Projects.length;
  }

  ngAfterViewInit(): void {
    this.preload();
  }

  preload()
  {
    if(document.getElementById('project-cluster') == null)
    {
      setTimeout(() => {
        this.preload();
      }, 25);
    }
    else
    {
      let event = new PageEvent();
      event.length = this.Size;
      event.pageIndex = 0;
      event.pageSize = 10;
      this.onPageEvent(event);
    }
  }

}


interface Project {
  name: string;
  finished: boolean;
  associated: string[];
  imageurl: string;
}

class ActiveProjectsDataComponent
{
  projects: Project[] =
  [
    { name:"generic series", finished: true, associated: ["John", "Doe"], imageurl: "../../assets/series-image1.webp" },
    { name:"generic series", finished: false, associated: ["Dave", "Doe"], imageurl: "../../assets/series-image1.webp" },
    { name:"generic series", finished: false, associated: ["Abigail", "Doe"], imageurl: "../../assets/series-image1.webp" },
    { name:"generic series", finished: true, associated: ["David", "Doe"], imageurl: "../../assets/series-image1.webp" },
    { name:"generic series", finished: false, associated: ["Meghan", "Doe"], imageurl: "../../assets/series-image1.webp" },
    { name:"generic movie", finished: true, associated: ["John", "Smith"], imageurl: "../../assets/movie-image1.webp" },
    { name:"generic movie", finished: true, associated: ["Dave", "Smith"], imageurl: "../../assets/movie-image1.webp" },
    { name:"generic movie", finished: true, associated: ["Abigail", "Smith"], imageurl: "../../assets/movie-image1.webp" },
    { name:"generic movie", finished: true, associated: ["David", "Smith"], imageurl: "../../assets/movie-image1.webp" },
    { name:"generic movie", finished: true, associated: ["Meghan", "Smith"], imageurl: "../../assets/movie-image1.webp" },
    { name:"generic game", finished: true, associated: ["John", "Doe", "the 2nd"], imageurl: "../../assets/movie-image1.webp" },
    { name:"generic game", finished: true, associated: ["John", "Doe", "the 3rd"], imageurl: "../../assets/movie-image1.webp" },
  ]
}