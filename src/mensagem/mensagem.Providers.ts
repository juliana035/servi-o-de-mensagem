import { DataSource } from 'typeorm';
import { Mensagem} from './Mensagem.entity';

export const mensagemProviders = [
  {
    provide: 'MENSAGEM_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository( Mensagem),
    inject: ['DATA_SOURCE'],
  },
];