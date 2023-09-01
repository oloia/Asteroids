import { IAsteroid } from '@/interfaces/asteroid.interface';

export type CartItem = IAsteroid;

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
}

export default Cart;
