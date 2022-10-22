import { Component, OnInit } from '@angular/core';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';
import { map} from 'rxjs/operators';


@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  listResults$: Observable <any> = of([])

  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }

  receiveData(event:string): void{
    //agarra el termino y se ejecuta cuando tiene 3 caracteres
    this.listResults$=this.searchService.searchTracks$(event)
    .pipe(
      map((dataRaw:any)=>dataRaw.data)
    )
  }
}
