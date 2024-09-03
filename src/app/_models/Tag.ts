export class Tag {

  static readonly ANGULAR  = new Tag('Angular','red');
  static readonly TYPESCRIPT  = new Tag('Typescript','darkred');
  static readonly PYTHON  = new Tag('Python','pink');
  static readonly CSHARP  = new Tag('C#','green');
  static readonly JAVA  = new Tag('Java','orange');
  static readonly NODEJS  = new Tag('Node.js','brown');
  static readonly ASPNET  = new Tag('ASP.net','purple');
  static readonly JAVASCRIPT  = new Tag('JavaScript','yellow');
  static readonly REACT  = new Tag('React','blue');
  static readonly BOOTSTRAP  = new Tag('Bootstrap','lighblue');


  private constructor(private readonly key: string, public color: string){

  }

  toString() {
    return this.key;
  }
}
