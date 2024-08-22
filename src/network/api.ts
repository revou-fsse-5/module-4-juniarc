import { FormValues, LoginFormValues } from '../types/authTypes';
import { AddCategoryFormValues } from '../components/home/AddCategoryForm';
import { CategoryItemType } from '../components/home/CategoryItem';

interface loginType {
  email: string;
  password: string;
}

const api = (() => {
  const BASE_URL = 'http://localhost:8080';

  function putAccessToken(token: string | null) {
    localStorage.setItem('accessToken', token ?? '');
  }

  function getAccessToken(): string | null {
    return localStorage.getItem('accessToken') ?? '';
  }

  async function _fetchWithToken(url: string, options: any = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  async function register({
    fullname,
    email,
    dateOfBirth,
    address,
    username,
    password,
  }: FormValues) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullname,
        email,
        dateOfBirth,
        address,
        username,
        password,
      }),
    });

    const responseJson = await response.json();

    if(!response.ok) {
      throw new Error(responseJson)
    }

    const { user } = responseJson;

    return user;
  }

  async function login({ email, password } : loginType) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const responseJson = await response.json();

    if(!response.ok) {
      throw new Error(responseJson)
    }

    const { accessToken } = responseJson;

    return accessToken;
  }

  async function getAllCategories() {
    const response = await fetch(`${BASE_URL}/categories`);
      const categories = await response.json();

      if(!response.ok) {
        throw new Error(categories);
      }

      return categories;
  }

  async function addCategory({ name, description } : AddCategoryFormValues) {
    try {
        const response = await _fetchWithToken(`${BASE_URL}/categories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                description
            })
        });

        const responseJson = await response.json();

        return responseJson
    } catch(error) {
        console.error(error)
    }
  }

  async function deleteCategory(id:number) {
    try {
        const response = await _fetchWithToken(`${BASE_URL}/categories/${id}`, {
            method: 'DELETE',
        });

        const responseJson = await response.json();

        return responseJson;
    } catch (error) {
        console.error(error);
    }
  }

  async function editCategory({ id, name, description } : CategoryItemType) {
    try {
        const response = await _fetchWithToken(`${BASE_URL}/categories/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              name,
              description
          }) 
        });

        const responseJson = await response.json();

        return responseJson;
    } catch (error) {
        console.error(error);
    }
  }

  return {
    getAccessToken,
    putAccessToken,
    register,
    login,
    getAllCategories,
    addCategory,
    deleteCategory,
    editCategory
  };
})();

export default api;
