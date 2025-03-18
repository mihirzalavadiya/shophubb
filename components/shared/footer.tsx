import React from 'react';
import { Button } from '../ui/button';
import { ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="relative bg-[#020916] text-white">
      <div className="absolute top-0 right-0 flex justify-center p-4">
        <Button className="rounded-full h-[40px]">
          <ChevronUp className="" />
        </Button>
      </div>
      <div className="p-4">
        <div className="flex justify-center gap-3 text-sm">
          <Link href="/page/conditions-of-use">Conditions of use</Link>
          <Link href="/page/privacy-policy">Privacy Policy</Link>
          <Link href="/page/help">Help</Link>
        </div>
        <div className="flex justify-center text-sm">
          <p> © 2024 - 2025, {APP_NAME}, Inc. or its affiliates</p>
        </div>
        <div className="mt-8 flex justify-center text-sm text-gray-400">
          GF, HSR LAYOUT, BANGALORE, KARNATAKA | INDIA
        </div>
      </div>
    </footer>
  );
};

export default Footer;
