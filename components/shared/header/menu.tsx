import Link from 'next/link';
import React from 'react';
import CartButton from './cart-button';

const Menu = () => {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full">
        <Link href="/signin" className="flex items-center header-button">
          Hello, Sign in
        </Link>
        <CartButton />
      </nav>
    </div>
  );
};

export default Menu;
