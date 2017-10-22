// Item type. This depends on what your dynamodb Item contains.
interface Item {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export default Item;
