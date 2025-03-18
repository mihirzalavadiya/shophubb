import { cwd } from 'process';
import { loadEnvConfig } from '@next/env';
import { connectToDatabase } from '.';
import data from '../data';
import Product from './models/product.model';
import User from './models/user.model';

loadEnvConfig(cwd());

const main = async () => {
  try {
    const { users, products } = data;
    await connectToDatabase(process.env.MONGODB_URI);

    await User.deleteMany();
    const createdUsers = await User.insertMany(users);

    await Product.deleteMany();
    const createdProducts = await Product.insertMany(products);

    console.log({
      createdUsers,
      createdProducts,
      message: 'Seeded Database Successfully',
    });
    process.exit(0);
  } catch (err) {
    console.error(err);
    throw new Error('Failed to seed database');
  }
};

main();
