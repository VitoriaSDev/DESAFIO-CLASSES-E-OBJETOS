class heroi {
  constructor(nomeHeroi, idadeHeroi, tipoHeroi) {
    this.nomeHeroi = nomeHeroi;
    this.idadeHeroi = idadeHeroi;
    this.tipoHeroi = tipoHeroi;
  }

  definirTipoAtaque() {
    let tipoAtaque = "";
    if (this.tipoHeroi == "Guerreiro") {
      tipoAtaque = "espada";
    } else if (this.tipoHeroi == "Mago") {
      tipoAtaque = "magia";
    } else if (this.tipoHeroi == "Ninja") {
      tipoAtaque = "Shuriken";
    }
    return tipoAtaque;
  }

  atacar() {
    console.log(
      `O ${this.tipoHeroi} atacou usando ${this.definirTipoAtaque()}`
    );
  }
}

let heroiUm = new heroi("Mugzinho", "29", "Ninja");

heroiGuerreiro.atacar();
