import {Controller, Post} from "@nestjs/common";
import {Folder, Bucket} from "../domain";
import {InjectRepository} from '@mikro-orm/nestjs';
import {EntityRepository} from '@mikro-orm/core';

@Controller()
export class FolderController {
  constructor(
    @InjectRepository(Bucket) private readonly bucketsRepo: EntityRepository<Bucket>,
  ) {}

  @Post('folders')
  async createFolder(
  ) {
    
    let bucket = await this.bucketsRepo.findOne('1', ['folders']);

    if (!bucket) {
      const newBucket = new Bucket();
      newBucket.id = '1';
      await this.bucketsRepo.persistAndFlush(newBucket);
      console.log('bucket created');
      bucket = await this.bucketsRepo.findOne('1', ['folders']);
    }

    const folder = new Folder();

    bucket.folders.add(folder);
    this.bucketsRepo.persist(bucket);
    await this.bucketsRepo.flush();
    return bucket;
  }
}

