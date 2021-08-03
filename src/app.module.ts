import {Module} from '@nestjs/common';
import {ControllersModule} from './controllers/module';

@Module({
  imports: [
    ControllersModule,
  ]
})
export class AppModule {}
