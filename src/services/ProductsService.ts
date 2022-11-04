import HttpClient from '@services/HttpClient';

export interface ProductResponse {
  id: string;
  name: string;
  price: 5699;
  rentPrice: 2569;
  imageUrl: string;
  description: string | null;
}

class ProductsService {
  private http = new HttpClient('http://localhost:3001');

  async listProducts() {
    const response = await this.http.get<ProductResponse[]>('/products');

    return response.data;
  }
}

export default new ProductsService();
