import { ViewChild } from '@angular/core';
import { Component, ElementRef, OnInit } from '@angular/core';
import { YoutubeApiService } from '../service/youtube-api.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.sass']
})
export class YoutubeComponent implements OnInit {
  player!: YT.Player;
  youtubeData: any;
  youtubeVideo: any;
  setData: any;


  @ViewChild('channelName') channelName: ElementRef | undefined;

  constructor(private youtubeService: YoutubeApiService) {

  }

  ngOnInit() {


    this.youtubeService.onYoutube('Shiva Hindi Tech').subscribe((data) => {
      console.log(data);

      this.setData = data;

      this.youtubeData = this.setData.items;
      // this.youtubeData.forEach((element: { id: any; }) => {
      //   this.youtubeVideo=element.id.videoId;
      // });
    })

    this.getYoutubeData();

  }

  getYoutubeData() {
    var channelName = this.channelName?.nativeElement.value;
    this.youtubeService.onYoutube(channelName).subscribe((data) => {
      console.log(data);

      this.setData = data;
      this.youtubeData = this.setData.items;
      // this.youtubeData.forEach((element: { id: any; }) => {
      //   this.youtubeVideo=element.id.videoId;
      // });
    })

  }

  savePlayer(player: any) {
    this.player = player;
    console.log(player);
  }

  onStateChange(event: any) {
    console.log(event);
  }

}
