import React from 'react';
import ReactDOM from 'react-dom/client';
//import { CallbackHook } from './06-memos/CallbackHook.jsx';
//import { MemoHook } from './06-memos/MemoHook.jsx';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/counterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import HooksApp from './HooksApp';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx';
//import { FocusScreen } from './04-useRef/FocusScreen.jsx';
//import { Layout } from './05-useLayoutEffect/Layout.jsx';
//import { Memorize } from './06-memos/Memorize.jsx';
import { Padre } from './07-tarea-memo/Padre.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Padre/>
  </React.StrictMode>,
)
