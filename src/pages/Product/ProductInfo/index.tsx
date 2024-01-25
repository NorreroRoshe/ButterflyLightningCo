import cls from './ProductInfo.module.scss';
import { ImgBlock } from './ImgBlock/index';
import { DescBlock } from './DescBlock/index';
import { Product } from '../../../Store/product/product.types';
import RelatedProductFeed from '@/components/product/feeds/related-product-feed';
import { RelatedBreakpoints } from '@/components/product/product-popup';

type ProductInfoProps = {
  detProduct: Product;
};

export const ProductInfo: React.FC<ProductInfoProps> = ({ detProduct }) => {
  return (
    <>
    <div className={`${cls.product_info_container} ${cls.container}`}>
      <ImgBlock detProduct={detProduct} />
      <DescBlock detProduct={detProduct} />
    </div>
    <div className={cls.product_info_feed}>
            <RelatedProductFeed
            id={detProduct.collectionId}
              carouselBreakpoint={RelatedBreakpoints}
              className="mb-0.5 md:mb-2 lg:mb-3.5 xl:mb-4 2xl:mb-6"
            />
            </div>
            </>
  );
};

export default ProductInfo;
