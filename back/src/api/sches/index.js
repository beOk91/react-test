import Router from 'koa-router';
import * as schesCtrl from './sches.ctrl';

const sches = new Router();

sches.get('/', schesCtrl.list);
sches.post('/', schesCtrl.write);

export default sches;
