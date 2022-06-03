import { Module } from '@nestjs/common';
import { PinoLoggerService } from 'src/pino-logger/pino-logger.service';

@Module({ providers: [PinoLoggerService], exports: [PinoLoggerService] })
export class PinoLoggerModuleModule {}
