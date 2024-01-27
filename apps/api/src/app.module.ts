import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ApiOutputInterceptor } from './common/api-response.interceptor';

@Module({
  imports: [ProjectModule],
  controllers: [AppController],
  providers: [
    AppService,

    {
      provide: APP_INTERCEPTOR,
      useClass: ApiOutputInterceptor,
    },
  ],
})
export class AppModule {}
