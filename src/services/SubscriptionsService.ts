import HttpClient from '@services/HttpClient';
import { ProductResponse } from '@services/ProductsService';

export interface SubscriptionResponse {
  id: string;
  price: number;
  expiresAt: string;
  product: ProductResponse
}

class SubscriptionsService {
  private http = new HttpClient('http://localhost:3001');

  async listSubscriptionsByToken(token: string) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await this.http.get<SubscriptionResponse[]>('/users/me/subscriptions', { headers });
    return response.data;
  }
}

export default new SubscriptionsService();
