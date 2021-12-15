import { Component, OnInit } from '@angular/core';
import { GalleryItem } from '../domain/models/GalleryItem';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass'],
})
export class GalleryComponent implements OnInit {
  constructor() {}

  gallery: GalleryItem[] = [
    {
      itemId: 0,
      itemName: 'Profile',
      itemUrl: 'profile',
      itemTimestamp: 'string',
      itemDesc: 'string',
      itemImgUrl: 'string',
      itemBGC: 'red',
    },
    {
      itemId: 1,
      itemName: 'Blog',
      itemUrl: 'blog',
      itemTimestamp: 'string',
      itemDesc: 'string',
      itemImgUrl: 'string',
      itemBGC: 'black',
    },
    {
      itemId: 2,
      itemName: 'Projects',
      itemUrl: 'projects',
      itemTimestamp: 'string',
      itemDesc: 'string',
      itemImgUrl: 'string',
      itemBGC: 'blue',
    },
    {
      itemId: 3,
      itemName: 'Games',
      itemUrl: 'games',
      itemTimestamp: 'string',
      itemDesc: 'string',
      itemImgUrl: 'string',
      itemBGC: 'yellow',
    },
    {
      itemId: 4,
      itemName: 'Contact',
      itemUrl: 'contact',
      itemTimestamp: 'string',
      itemDesc: 'string',
      itemImgUrl: 'string',
      itemBGC: 'silver',
    },
  ];

  ngOnInit(): void {}
}
