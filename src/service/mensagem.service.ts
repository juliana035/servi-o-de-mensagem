
import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mensagem} from '../mensagem/mensagem.entity';

const fs = require('fs');

@Injectable()
export class MensagemService {
  constructor(
    @InjectRepository(Mensagem)
    private mensagemRepository: Repository< Mensagem>,
  ) {}

  async findAllMensagem(){  //  fazendo a busca das mensagens 
    return this.mensagemRepository.find(); // através do metodo this. E assim o find traz todas as mensagem que estiver no banco
  }
  
  async createMensagem(mensagem: Mensagem){
    try{
      const novaMensagem = this.mensagemRepository.create(mensagem)
      return this.mensagemRepository.save(novaMensagem);

    }catch (erro){
      throw new Error("Não foi possivel criar nova mensagem")
    }
    
  }
       async gravar(data: Mensagem){
        let mensagemNova = new Mensagem ()
        let dia = new Date
        mensagemNova.mensagem = data.mensagem
        mensagemNova.id = data.id
        mensagemNova.created = dia
        
          fs.writeFile(dia.getDate()+dia.getTime()+dia.getMilliseconds()+".json",mensagemNova.id+ "" +mensagemNova.mensagem+ "" +mensagemNova.created,(error)=>{
            if(error)throw error;
            console.log(mensagemNova)
          })

       }

  }

