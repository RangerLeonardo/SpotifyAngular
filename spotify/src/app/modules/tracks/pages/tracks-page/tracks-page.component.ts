import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll() //TODO 📌📌
    this.loadDataRandom() //TODO 📌📌
  }

  loadDataAll(): void{
    this.trackService.getAllTracks$().subscribe((Response: TrackModel[])=>{
      this.tracksTrending=Response
    })  //esta ya es la forma correcta, el usar to promise es algo que será desechado pronto

  }

  loadDataRandom(): void {
    this.trackService.getAllRandom$().subscribe((response: TrackModel[]) => {
        this.tracksRandom = response
      })
  }

 

  ngOnDestroy(): void{ }

}
