import Realm from 'realm';

export interface TodoInterface {
  _id: string;
  title: string;
  description: string;
  status: boolean;
}

export default class Todo extends Realm.Object {
  static schema = {
    name: 'Todo',
    properties: {
      _id: 'string',
      title: 'string',
      description: 'string',
      status: 'bool',
    },
    primaryKey: '_id',
  };

  static getTodoModelName() {
    return Todo.schema.name;
  }

  static PrimaryKey() {
    return Todo.schema.primaryKey;
  }
}
