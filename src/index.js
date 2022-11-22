import './css/style.css';
import jQuery from "jquery";
import './js/popup';
import './css/mentismenu.css'

import { createPopper } from '@popperjs/core';
import MetisMenu from 'metismenujs';


const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');

createPopper(popcorn, tooltip, {
  placement: 'top',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 10],
      },
    },
  ],
});

MetisMenu.attach('#menu');