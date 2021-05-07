import Realm from 'realm';
import Todo from './schemes/Todo';
import todoAction from './actions/TodoActions';
//import {TodoActionInterface} from './actions/TodoActions';

const realmInstance = new Realm({
  path: 'myrealm',
  schema: [Todo],
});

console.log('asdsad ', realmInstance);

export const getRealmInstance = () => realmInstance;

export const todoActions = todoAction(realmInstance);
