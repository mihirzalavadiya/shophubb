import { ShoppingCartIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Menu = () => {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full">
        <Link href="/signin" className="flex items-center header-button">
          Hello, Sign in
        </Link>
        <Link href="/cart" className="header-button">
          <div className="flex justify-center items-end">
            <ShoppingCartIcon className="h-5 w-5 mr-2" />
            Cart
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
