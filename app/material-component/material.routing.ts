import { Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { EventsComponent } from './events/events.component'
import { PlansComponent } from './plans/plans.component'
import { SpringrockhistoryComponent} from './springrockhistory/springrockhistory.component'
import { StadiumseatsComponent } from './stadiumseats/stadiumseats.component'
import { RegisterComponent } from './register/register.component'
import { SpringrockopenComponent } from './springrockopen/springrockopen.component'
import { BoardComponent } from './board/board.component'
import { AuctionItemsComponent } from './auction-items/auction-items.component'

export const MaterialRoutes: Routes = [
  {
    path: 'button',
    component: ButtonsComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'stepper',
    component: StepperComponent
  },
  {
    path: 'expansion',
    component: ExpansionComponent
  },
  {
    path: 'chips',
    component: ChipsComponent
  },
  {
    path: 'toolbar',
    component: ToolbarComponent
  },
  {
    path: 'progress-snipper',
    component: ProgressSnipperComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'tooltip',
    component: TooltipComponent
  },
  {
    path: 'snackbar',
    component: SnackbarComponent
  },
  {
    path: 'slider',
    component: SliderComponent
  },
  {
    path: 'slide-toggle',
    component: SlideToggleComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'plans',
    component: PlansComponent 
  }, 
  {
    path: 'springrockhistory',
    component: SpringrockhistoryComponent
  }, 
  {
    path: 'stadiumseats',
    component: StadiumseatsComponent
  },
  {
    path: 'springrockopen',
    component:  SpringrockopenComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'board',
    component: BoardComponent
  },
  {
    path: 'auctionItems',
    component: AuctionItemsComponent
  }

  
];


