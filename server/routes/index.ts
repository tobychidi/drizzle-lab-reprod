import { db } from '../../db';

export default eventHandler((event) => {
  return {
    message: "Welcome to the Drizzle Lab API",
    version: "1.0.0"
  };
});
