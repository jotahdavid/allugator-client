import HttpClient from '@services/HttpClient';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserCreation extends Omit<User, 'id'> {
  password: string;
}

export interface UserCredential {
  email: string;
  password: string;
}

export type UserResponseWithoutToken = Omit<UserResponse, 'token'>;

interface UserResponse {
  user: User;
  token: string;
}

class UsersService {
  private http = new HttpClient(import.meta.env.VITE_API_URL);

  async createUser(user: UserCreation) {
    const response = await this.http.post<UserResponse, UserCreation>('/users', user);
    return response.data;
  }

  async login(credential: UserCredential) {
    const response = await this.http.post<UserResponse, UserCredential>('/auth/login', credential);
    return response.data;
  }

  async getByToken(token: string) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await this.http.get<UserResponseWithoutToken>('/users/me', { headers });
    return response.data;
  }
}

export default new UsersService();
