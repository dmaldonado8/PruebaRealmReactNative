import Todo, {TodoInterface} from '../schemes/Todo';

export interface TodoActionInterface {
  saveTodo(todoProps: TodoInterface): Promise<Todo>;
  retrieveAllTodos(): any;
}

export default (realmInstance: any): TodoActionInterface => {
  return {
    saveTodo: (todoProps: TodoInterface): Promise<Todo> => {
      console.log('INST ', realmInstance);
      return new Promise((resolve, reject) => {
        try {
          const todo: TodoInterface = {
            _id: todoProps._id,
            title: todoProps.title,
            description: todoProps.description,
            status: todoProps.status,
          };

          realmInstance.write(() => {
            const createdTodo = realmInstance.create(
              Todo.getTodoModelName(),
              todo,
              true,
            );
            console.log(createdTodo);
            resolve(createdTodo);
          });
        } catch (error) {
          reject(error);
        }
      });
    },
    retrieveAllTodos: () => {
      return realmInstance.objects(Todo.getTodoModelName());
    },
  };
};
