import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensagemController } from 'src/controller/Controler';
import { MensagemService } from '../service/mensagem.service';
import { Mensagem } from './mensagem.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Mensagem])],
  controllers:[MensagemController],
  providers: [ MensagemService],
  //exports:[MensagemService]
})
export class MensagemModule {}
