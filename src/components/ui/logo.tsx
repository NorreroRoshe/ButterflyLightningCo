import Image from 'next/image';
import cn from 'classnames';
import Link from 'next/link';
import { siteSettings } from '@/settings/site-settings';
import logos from "../../assets/img/Buttlogo.png"

const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  href = siteSettings.logo.href,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn('inline-flex focus:outline-none', className)}
      {...props}
    >
      <Image
        src={logos}
        alt={siteSettings.logo.alt}
        height={siteSettings.logo.height}
        width={siteSettings.logo.width}
        // layout="fixed"
        loading="eager"
      />
    </Link>
  );
};

export default Logo;
