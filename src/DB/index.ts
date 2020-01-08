import * as mongoose from 'mongoose';

mongoose.connect('mongodb+srv://root:root@test-orders-onzjk.gcp.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });

const manufacturer = {
  id: String,
  name: String,
  phone: String,
  siret: Number
}
const owner = {
  id: String,
  name: String,
  purchaseDate: Date
}
const car = {
  id: String,
  price: Number,
  firstRegistrationDate: Date,
  manufacturer: String,
  owners: Array
}

const CarSchema = new mongoose.Schema(car);
const ManufacturerSchema = new mongoose.Schema(manufacturer);
const OwnerSchema = new mongoose.Schema(owner);

const ManufacturerModel = mongoose.model('Manufacturers', ManufacturerSchema);
const OwnerModel = mongoose.model('Owners', OwnerSchema);
const CarModel = mongoose.model('Cars', CarSchema);

export { ManufacturerModel, OwnerModel, CarModel };
