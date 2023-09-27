import {
  Body,
    Controller,
   
    Get,
    Param,
    Post,
  } from '@nestjs/common';
import { Mensagem } from 'src/mensagem/mensagem.entity';
import { MensagemService } from 'src/service/mensagem.service';

 
  @Controller('/mensagens') //endpoint
  export class MensagemController {
    constructor(private readonly mensagemService: MensagemService) {}

@Get()
getMensagem(){
  return this.mensagemService.findAllMensagem();
}

    @Post() 
    async createMensagem(@Body() mensagem:Mensagem){ // async porque vamos solicitar algo na qual vamos aguarda a resposta. 
      return this. mensagemService.createMensagem (mensagem)
    }

  //   @Post('gravar')
  //   async gravar(@Body() data:Mensagem): Promise<any>{
  //       let resultado = this.mensagemService.gravar(data)
  //       return resultado
   
  // }
  
}