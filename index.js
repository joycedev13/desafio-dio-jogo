class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

atacar() {
    let ataque;
    switch (this.tipo) {
        case 'mago':
            ataque = 'magia';
            break;
        case 'guerreiro':
            ataque = 'espada';
            break;
        case 'monge':
            ataque = 'artes marciais';
            break;
        case 'ninja':
            ataque = 'shuriken';
            break;
        default:
            ataque = 'ataque desconhecido';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroi1 = new Heroi('Lucas', 21, 'mago');
heroi1.atacar();

let heroi2 = new Heroi('Gabriel', 22, 'guerreiro');
heroi2.atacar(); 

let heroi3 = new Heroi('Athur', 24, 'monge');
heroi3.atacar();

let heroi4 = new Heroi('Guilherme', 30, 'ninja');
heroi4.atacar();