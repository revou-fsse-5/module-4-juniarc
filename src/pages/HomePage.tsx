import React, { useEffect, useState } from 'react';
import AuthedLayout from '../components/layout/AuthedLayout';
import api from '../network/api';
import CategoryList from '../components/home/CategoryList';
import AddCategoryForm from '../components/home/AddCategoryForm';
import ErrorModal from '../components/modals/ErrorModal';
import { CategoryItemType } from '../components/home/types';
import { AddCategoryFormValues } from '../components/home/types';

function HomePage() {
  const [categories, setCategories] = useState<CategoryItemType[]>([]);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchCategories = async () => {
    try {
      const categoriesFromApi = await api.getAllCategories();
      setCategories(categoriesFromApi);
    } catch (error) {
      setErrorModalOpen(true);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unexpected error occurred');
      }
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await api.deleteCategory(id);

      fetchCategories();
    } catch (error) {
      setErrorModalOpen(true);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unexpected error occurred');
      }
      console.log(error);
    }
  };

  const addCategory = async ({ name, description }: AddCategoryFormValues) => {
    try {
      const newCategory = await api.addCategory({ name, description });
      setCategories((prevState) => [...prevState, newCategory]);
    } catch (error) {
      setErrorModalOpen(true);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unexpected error occurred');
      }
      console.log(error);
    }
  };

  const handleEdit = async ({ id, name, description }: CategoryItemType) => {
    try {
      await api.editCategory({ id, name, description });

      fetchCategories();
    } catch (error) {
      setErrorModalOpen(true);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unexpected error occurred');
      }
      console.log(error);
    }
  };

  return (
    <AuthedLayout>
      <section className="home-page">
        <AddCategoryForm addCategory={addCategory} />
        <CategoryList
          categories={categories}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
        {isErrorModalOpen && (
          <ErrorModal
            setIsOpen={setErrorModalOpen}
            isOpen={isErrorModalOpen}
            parentPage="home-page"
            errorMessage={errorMessage}
          />
        )}
      </section>
    </AuthedLayout>
  );
}

export default HomePage;
