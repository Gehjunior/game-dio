// Definindo a classe
class Heroi {
  // Construção da classe
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar para definição da mensagem com base no heroi
  atacar() {
    let ataque;
    // Estrutura de decisão
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "ataque indefinido";
    }
    // Saida
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}
// Uso da classe
const heroi = new Heroi("Herói1", 25, "mago");
heroi.atacar();
