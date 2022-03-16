export interface ITodo {
  title: string,
  id: number,
  completed: boolean
}

export interface ITodoItem extends ITodo {
  classes: string,
  onRemoveHandler: (id: number) => void
  onChangeHandler: (id: number) => void
}