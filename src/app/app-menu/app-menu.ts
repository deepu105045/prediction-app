
import { MenuItem } from 'framework/services/menu/menu.service';

export let initialMenuItems: Array<MenuItem> = [
        {
        text: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: '/authenticated/dashboard',
        subMenu: null
    },
    // {
    //     text: 'Point Table',
    //     icon: 'glyphicon-dashboard',
    //     route: '/authenticated/point-table',
    //     subMenu: null
    // },
    // {
    //     text: 'Rules',
    //     icon: 'glyphicon-dashboard',
    //     route: '/authenticated/prediction-rules',
    //     subMenu: null
    // },
    {
        text: 'Update Results',
        icon: 'glyphicon-dashboard',
        route: '/authenticated/update-results',
        subMenu: null
    }, 
    {
        text: 'Game Scheduler',
        icon: 'glyphicon-dashboard',
        route: '/authenticated/game-scheduler',
        subMenu: null
    },
    {
        text: 'Tournament Settings',
        icon: 'glyphicon-dashboard',
        route: '/authenticated/tournament-settings',
        subMenu: null
    }
];
