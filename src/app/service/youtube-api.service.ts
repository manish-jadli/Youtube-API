import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

constructor(private http:HttpClient) { }

onYoutube(channelName:any){

  const API_KEY='AIzaSyA4hvABw1DSHg5KnR57e-SXX7FH2K6gErY';

  // &maxResults=50

  const url="https://www.googleapis.com/youtube/v3/search?part=snippet&q="+channelName+"&type=video&key="+API_KEY+"&maxResults=10";

  return this.http.get(url);


}


}
