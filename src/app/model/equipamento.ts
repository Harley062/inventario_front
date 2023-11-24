import { Pessoa } from "./pessoa";

export class Equipamento {

    codigo!: number;
    possuinotebook!: boolean;
    descricaonotebook!: string;
    dataentreganotebook!: Date;
    patrimonionotebook!: number;
    possuitela!: boolean;
    descricaotela!: string;
    dataentregatela!: Date;
    patrimoniotela!: number;

    pessoa!:Pessoa;
    
}
