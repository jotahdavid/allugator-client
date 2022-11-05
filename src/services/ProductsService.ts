import HttpClient from '@services/HttpClient';

export interface ProductResponse {
  id: string;
  name: string;
  price: 5699;
  rentPrice: 2569;
  imageUrl: string;
  description: string | null;
}

export interface OrderBy {
  field: 'name' | 'price';
  order: 'asc' | 'desc'
}

class ProductsService {
  private http = new HttpClient('http://localhost:3001');

  async listProducts(orderBy?: Partial<OrderBy>) {
    const direction = orderBy?.order === 'desc' ? 'desc' : 'asc';
    const field = orderBy?.field === 'price' ? 'price' : 'name';

    const response = await this.http.get<ProductResponse[]>(`/products?orderBy=${field}&order=${direction}`);
    return response.data;
  }

  async getProductById(productId: string) {
    const response = await this.http.get<ProductResponse>(`/products/${productId}`);
    return response.data;
  }
}

export default new ProductsService();
