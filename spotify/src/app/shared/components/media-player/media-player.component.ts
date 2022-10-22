import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MultiMediaService } from '@shared/services/multi-media.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild("progressBar") progressBar:ElementRef = new  ElementRef("");
  listObservers$:Array<Subscription>=[];
  state:string="paused"

  constructor(public multimediaService:MultiMediaService) { }

  ngOnInit(): void { //el ngoninit es el pri mer en ejecutarse
    const observer1$ = this.multimediaService.playerStatus$
    .subscribe(status =>this.state = status)

    this.listObservers$ = [observer1$]

  }

  ngOnDestroy(): void { //ngondestroy es el último antes de destruir el componente
    this.listObservers$.forEach(u => u.unsubscribe())
    
  }

  handlePosition(event: MouseEvent):void{
    const elNative:HTMLElement = this.progressBar.nativeElement
    const {clientX}=event;
    const{x,width} = elNative.getBoundingClientRect();
    const clickX = clientX - x;
    const percentageFromX = (clickX * 100) / width;

    this.multimediaService.seekAudio(percentageFromX);
  }



}
