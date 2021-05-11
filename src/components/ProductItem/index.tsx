import React, { memo, useState, lazy, Suspense } from 'react';
import lodash from 'lodash';

const AddProductToWishlist = lazy(() => {
  return import('../AddProductToWishlist')
})

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }
  onAddToWishlist: (id: number) => void;
}
const ProductItem: React.FC<ProductItemProps> = ({product, onAddToWishlist}) => {
  const [isAddingToWishList, setIsAddingToWishlist] = useState(false);

  return (
  <div>
    {product.title} - <strong>{product.priceFormatted}</strong>
    <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>
    
    { isAddingToWishList && (
      <Suspense fallback={<div>Carregando...</div>}>
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      </Suspense>
     )}
   
  </div>);
}

export default memo(ProductItem, (prevProps, nextProps) => {
  return lodash.isEqual(prevProps.product, nextProps.product)
});