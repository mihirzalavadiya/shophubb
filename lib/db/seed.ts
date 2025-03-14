import { cwd } from 'process';
import { loadEnvConfig } from '@next/env';
import { connectToDatabase } from '.';
import data from '../data';
import Product from './models/product.model';

loadEnvConfig(cwd());

const main = async () => {
  try {
    const { products } = data;
    await connectToDatabase(process.env.MONGODB_URI);

    await Product.deleteMany();
    const createdProducts = await Product.insertMany(products);

    console.log({ createdProducts, message: 'Seeded Database Successfully' });
    process.exit(0);
  } catch (err) {
    console.error(err);
    throw new Error('Failed to seed database');
  }
};

main();
