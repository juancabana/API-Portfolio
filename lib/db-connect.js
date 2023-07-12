import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://juancabana:cab994242@cluster0.lkpkpcf.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'portfolio', // Agrega la opción dbName para especificar la base de datos

    });
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;