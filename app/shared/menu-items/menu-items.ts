import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'starter', name: 'Home', type: 'link', icon: 'star' },
  { state: 'auctionItems', name: 'Auction Items', type: 'link', icon: 'star' },
  { state: 'stadiumseats', type: 'link', name: 'Stadium Seating', icon: 'star' },
  { state: 'plans', type: 'link', name: 'The Conceptual Plans', icon: 'star' },
  { state: 'springrockhistory', type: 'link', name: 'WS Tennis Then', icon: 'star' },
  { state: 'events', type: 'link', name: 'WS Tennis Now', icon: 'star' },
    { state: 'springrockopen', type: 'link', name: 'Spring Rock Open', icon: 'star' },
  { state: 'board', type: 'link', name: 'Board of Directors', icon: 'star' },
   { state: 'register', type: 'link', name: 'Contact', icon: 'star' }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
