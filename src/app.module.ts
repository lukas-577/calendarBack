import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FechasModule } from './fechas/fechas.module';
import { LugaresModule } from './lugares/lugares.module';
import { ReservaModule } from './reserva/reserva.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,  // Hace que .env esté disponible en todo el proyecto
    }),
    PrismaModule,
    UserModule,
    FechasModule,
    LugaresModule,
    ReservaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
