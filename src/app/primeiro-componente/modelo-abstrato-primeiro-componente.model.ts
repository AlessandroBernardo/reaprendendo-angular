export class ModeloAbstratoPrimeiroComponenteModel {
   
  id: number;
  name: string;
  abstractVariable: any;
  

  constructor(data?: any) {
    if (data) {      
      this.id = data.id;
      this.name = data.name;
      this.abstractVariable = data.abstractVariable;      
    }
  }    
}
