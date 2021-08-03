import {Module} from '@nestjs/common';
import {DomainModule} from '../domain';
import {FolderController} from './FolderController';

@Module({
  imports: [
    DomainModule,
  ],
  controllers: [ 
    FolderController
  ],
  providers: [],
  exports: []
})
export class ControllersModule {}

