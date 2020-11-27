import React from 'react';
import { hydrate } from 'react-dom';

import Main from '../components/Main';

const props = window.__PRELOAD_STATE__;

const element = document.getElementById('root-app');
hydrate(<Main {...props} />, element);
