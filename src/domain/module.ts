import {Module} from '@nestjs/common';

import {MikroOrmModule} from '@mikro-orm/nestjs';

import {Bucket} from '.';
import config from '../mikro-orm.config';

@Module({
  imports: [
    MikroOrmModule.forRoot(config),
    MikroOrmModule.forFeature([Bucket])
  ],
  exports: [MikroOrmModule]
})
export class DomainModule {}
