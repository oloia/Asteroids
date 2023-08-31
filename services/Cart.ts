export interface CartItem {
  name: string;
  size: string;
  id: string;
}

class Cart {
  constructor(private readonly key: string) {
  }

  addItem = (item: CartItem) => {
    const items = this.getAllItems();
    items.push(item);
    localStorage.setItem(this.key, JSON.stringify(items));
  };

  getAllItems = (): CartItem[] => {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  };

  hasItem = (id: string): boolean => {
    const items = this.getAllItems();
    return items.some((item) => item.id === id);
  };
}

export default Cart;
