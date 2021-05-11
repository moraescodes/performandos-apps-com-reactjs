import React from 'react';
import { List, ListRowRenderer } from 'react-virtualized'
import ProductItem from '../ProductItem';

// import { Container } from './styles';

interface SearchResultsProps{
  totalPrice: number
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>
  onAddToWishlist: (id: number) => void;
}
const SearchResults: React.FC<SearchResultsProps> = ({results, onAddToWishlist, totalPrice}) => {

  const rowRenderer:ListRowRenderer = ({ index,key, style }) =>{
    return(
      <div key={key} style={style}>
      <ProductItem
          product={results[index]}
          onAddToWishlist={onAddToWishlist}
        />
      </div>
    );
  }
   return(
    <div>
      <h2>{totalPrice}</h2>

      <List 
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>)
  ;
}

export default SearchResults;