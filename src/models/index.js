// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, Size } = initSchema(schema);

export {
  Product,
  Size
};