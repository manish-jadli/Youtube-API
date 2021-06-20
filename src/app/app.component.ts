import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { YoutubeApiService } from './service/youtube-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Youtube-API';
  // player!: YT.Player;
  // youtubeData:any;
  // youtubeVideo:any;


  //   @ViewChild('channelName') channelName:ElementRef | undefined;

  constructor(private youtubeService:YoutubeApiService){}

  ngOnInit(){


  // this.youtubeService.onYoutube('Shiva hindi tech').subscribe((data)=>{
  //   console.log(data.items)
  //   this.youtubeData= data.items;
  //   // this.youtubeData.forEach((element: { id: any; }) => {
  //   //   this.youtubeVideo=element.id.videoId;
  //   // });
  //   })

  }

  // getYoutubeData(){
  //   var channelName= this.channelName?.nativeElement.value;
  //   this.youtubeService.onYoutube(channelName).subscribe((data)=>{
  //     console.log(data.items)
  //     this.youtubeData= data.items;
  //     // this.youtubeData.forEach((element: { id: any; }) => {
  //     //   this.youtubeVideo=element.id.videoId;
  //     // });
  //   })
   
  // }

  // savePlayer(player:any){
  // this.player=player;
  // console.log(player);
  // }

  // onStateChange(event:any){
  // console.log(event);
  // }

}
