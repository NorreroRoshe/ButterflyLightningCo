import Counter from '@/components/ui/counter';
import cls from '@/components/GoodsCatalogue/GoodsCatalogue.module.scss';
import { useCart } from '@/hooks/useCart';
import { Product } from '@/Store/product/product.types';

interface Props {
  cartCount: any;
  product: Product;
}

export const AddToCart = ({ cartCount, product }: Props) => {
  const { addToCart, isLoading } = useCart();

  const handleAddToCart = () => {
    addToCart(product.id)
  }

  return (
    <>
      {cartCount > 0 ? (
        <Counter className={cls.add_to_coun} product={product} />
      ) : (
        <button
          disabled={isLoading}
          onClick={handleAddToCart}
          className={`${cls.cartlike__btn1} ${
            cartCount ? cls.cartlike__btn1_active : ''
          }`}></button>
      )}
    </>
  );
};
