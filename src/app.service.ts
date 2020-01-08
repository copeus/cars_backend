import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  model: any
  constructor(model: any) {
    this.model = model;
  }

  async find(input?: Object) {
    const find = input ? input : {};
    const query = this.model.find(find);
    return await query.exec();
  }

  async create(payload: Object) {
    const mutation = await this.model.create(payload);
    return mutation;
  }

  async update(id: String, input: Object) {
    const { nModified } = await this.model.replaceOne({ id }, input);
    return { modifiedCount: nModified };
  }

  async delete(id: String) {
    const { deletedCount } = await this.model.deleteOne({ id });
    return { deletedCount };
  }
}
