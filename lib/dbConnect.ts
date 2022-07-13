import mongoose from "mongoose";

// const { MONGODB_URI } = process.env;

// let cached = global.mongoose;

// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable inside .env.local"
//   );
// }

// async function conectarDB() {
//   try {
//     if (cached.conn) {
//       return cached.conn;
//     }

//     if (!cached.promise) {
//       const opts = {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         bufferCommands: false,
//         bufferMaxEntries: 0,
//         useFindAndModify: false,
//         useCreateIndex: true,
//       };

//       cached.promise = mongoose
//         .connect(MONGODB_URI as string, opts)
//         .then((mongoose) => {
//           return mongoose;
//         });
//     }
//     cached.conn = await cached.promise;
//     return cached.conn;

//     // await mongoose.connect(MONGODB_URI as string);

//     console.log("mongodb conectado !!!");
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// }

// export default conectarDB;

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI as string, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
