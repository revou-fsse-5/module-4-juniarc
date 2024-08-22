import React from 'react';
import CategoryItem, {CategoryItemType} from './CategoryItem';

interface CategoryListPropsType {
    categories: CategoryItemType[],
    onDelete: (id: number) => void;
    onEdit: ({id, name, description} : CategoryItemType) => void;
}

function CategoryList({ categories, onDelete, onEdit } : CategoryListPropsType) {
    if(categories.length === 0) {
        return(
            <p className='text-white text-xl'>Threre is no category. Let's add new category</p>
        )
    }

    return(
        <section className='mt-10'>
            {
            categories.map((category) => (
                <CategoryItem key={category.id} {...category} onDelete={onDelete} onEdit={onEdit}/>
            ))
        }
        </section>
    )
}

export default CategoryList;