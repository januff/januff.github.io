import * as layout from './layout.actions';

export interface State {
  openedModalName: string;
  leftSidebarOpened: boolean;
  rightSidebarOpened: boolean;
  topSidebarOpened: boolean;
  bottomSidebarOpened: boolean;  
  windowHeight: number;
  windowWidth: number;
  alerts: Array<Object>;
}

const initialState: State = {
  openedModalName: 'test',
  leftSidebarOpened: false,
  rightSidebarOpened: false,
  topSidebarOpened: false,
  bottomSidebarOpened: false,
  windowHeight: window.screen.height,
  windowWidth: window.screen.width,
  /*
   In a real world case, adding a model for an alert is recommended.
   */
  alerts:[],
};


/*
  The reducer of the layout state. Each time an action for the layout is dispatched,
  it will create a new state for the layout.
 */


export function reducer(state = initialState, action: layout.LayoutActions ): State {

  /*
   Alert cases
   */

  switch (action.type) {
    case layout.LayoutActionTypes.ADD_ALERT: {
      return Object.assign({}, state, {
        alerts:[...state.alerts, action.payload]
      });
    }

    case layout.LayoutActionTypes.REMOVE_ALERT: {
      return Object.assign({}, state, {
        alerts: state.alerts.filter(alert =>
          alert['message'] !== action.payload['message']
        )
      });
    }


    /*
      Modal cases
     */
    case layout.LayoutActionTypes.OPEN_MODAL: {

      const name = action.payload;
      return Object.assign({}, state, {
        openedModalName:name
      });
    }

    case layout.LayoutActionTypes.CLOSE_MODAL: {
      return Object.assign({}, state, {
        openedModalName:null
      });
    }

    /*
     Sidenav cases
     */
    case layout.LayoutActionTypes.CLOSE_ALL_SIDENAV: {
      return Object.assign({}, state, {
        leftSidebarOpened: false,
        rightSidebarOpened: false,
        topSidebarOpened: false,
        bottomSidebarOpened: false
      });
    }
    case layout.LayoutActionTypes.CLOSE_LEFT_SIDENAV: {
      return Object.assign({}, state, {
        leftSidebarOpened: false,
        rightSidebarOpened: false,
        topSidebarOpened: false,
        bottomSidebarOpened: false
      });
    }
    case layout.LayoutActionTypes.OPEN_LEFT_SIDENAV: {
      return Object.assign({}, state, {
        leftSidebarOpened: true,
        rightSidebarOpened: false,
        topSidebarOpened: false,
        bottomSidebarOpened: false
      });
    }
    case layout.LayoutActionTypes.CLOSE_RIGHT_SIDENAV: {
      return Object.assign({}, state, {
        leftSidebarOpened: false,
        rightSidebarOpened: false,
        topSidebarOpened: false,
        bottomSidebarOpened: false
      });
    }
    case layout.LayoutActionTypes.OPEN_RIGHT_SIDENAV: {
      return Object.assign({}, state, {
        leftSidebarOpened: false,
        rightSidebarOpened: true,
        topSidebarOpened: false,
        bottomSidebarOpened: false
      });
    }
    case layout.LayoutActionTypes.CLOSE_TOP_SIDENAV: {
      return Object.assign({}, state, {
        leftSidebarOpened: false,
        rightSidebarOpened: false,
        topSidebarOpened: false,
        bottomSidebarOpened: false
      });
    }
    case layout.LayoutActionTypes.OPEN_TOP_SIDENAV: {
      return Object.assign({}, state, {
        leftSidebarOpened: false,
        rightSidebarOpened: false,
        topSidebarOpened: true,
        bottomSidebarOpened: false
      });
    }
    case layout.LayoutActionTypes.CLOSE_BOTTOM_SIDENAV: {
      return Object.assign({}, state, {
        leftSidebarOpened: false,
        rightSidebarOpened: false,
        topSidebarOpened: false,
        bottomSidebarOpened: false
      });
    }
    case layout.LayoutActionTypes.OPEN_BOTTOM_SIDENAV: {
      return Object.assign({}, state, {
        leftSidebarOpened: false,
        rightSidebarOpened: false,
        topSidebarOpened: false,
        bottomSidebarOpened: true
      });
    }
    /*
     Window resize case
     */
    case layout.LayoutActionTypes.RESIZE_WINDOW: {
      const height:number = action.payload['height'];
      const width:number = action.payload['width'];
      const leftSidebarState = width < 768 ? false : state.leftSidebarOpened;

        return Object.assign({}, state, {
          windowHeight: height,
          windowWidth: width,
          leftSidebarOpened: leftSidebarState
        });
      }



    default:
      return state;
  }
}

export const getOpenedModalName = (state:State) =>  state.openedModalName;
export const getLeftSidenavState = (state:State) => state.leftSidebarOpened;
export const getRightSidenavState = (state:State) => state.rightSidebarOpened;
export const getTopSidenavState = (state:State) => state.topSidebarOpened;
export const getBottomSidenavState = (state:State) => state.bottomSidebarOpened;
export const getWindowWidth = (state:State) => state.windowWidth;
export const getWindowHeight = (state:State) => state.windowHeight;
export const getAlerts = (state:State) => state.alerts;

