import { ViteSSG } from 'vite-plugin-ssg/react';
import App from './App';
import './index.css';

export const createApp = ViteSSG(App);
