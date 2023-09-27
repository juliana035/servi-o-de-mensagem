
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

  
  async findAllMensagem(){                 
    return this.mensagemRepository.find(); 
  }
  
  async createMensagem(mensagem: Mensagem){                                                  
    let queue =[];    
    let mensagemNova = new Mensagem ();
    let dia = new Date;
    mensagemNova.mensagem = mensagem.mensagem;
    mensagemNova.id = mensagem.id;
    mensagemNova.created = dia;

     const dados = ({mensagem:mensagemNova.mensagem,data:mensagemNova.created});
     queue.push(dados)
      console.log(typeof dados)
      console.log(queue)
    
      const convert = JSON.stringify(queue);
    try{
      const novaMensagem = this.mensagemRepository.create(mensagem)
      fs.appendFile("arquivo.json", convert, (err) => {
      
        if (err) {
          console.log(err);
        }
        else {
          
          console.log("\nerro",
            fs.readFileSync("arquivo.json", "utf8"));
        }
    });
      return this.mensagemRepository.save(novaMensagem);

    }catch (erro){
      throw new Error("Não foi possivel criar nova mensagem")
    }
    
  }
       async gravar(data: Mensagem){
        let arquivo 
        try {
          arquivo = fs.readFileSync('arquivo.json', {encoding:'UTF8', flag: 'r'});
          console.log (typeof arquivo)
          
         
        } catch (err){
          console.log(err)
        }

        let queue =[];    
        let mensagemNova = new Mensagem ();
        let dia = new Date;
        mensagemNova.mensagem = data.mensagem;
        mensagemNova.id = data.id;
        mensagemNova.created = dia;

         queue.push(JSON.parse(arquivo)) 
         
         const dados = ({mensagem:mensagemNova.mensagem,data:mensagemNova.created});
         queue.push(dados)
          console.log(typeof dados)
          console.log(queue)
        
          const convert = JSON.stringify(queue);
          console.log(convert);
          fs.writeFile("arquivo.json",convert, (err)=>{
            if (err)throw err;
            console.log(typeof convert)
          })

          

        }
      
  }

