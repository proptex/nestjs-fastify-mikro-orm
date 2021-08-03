import {PrimaryKey, Entity, ManyToOne} from '@mikro-orm/core';
import { v4 } from 'uuid';

import {Bucket} from '.';

@Entity()
export class Folder {
  @PrimaryKey()
  id: string = v4();

  @ManyToOne({type: 'Bucket'})
  bucket: Bucket
}
