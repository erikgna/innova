export class TranslateFromApi {
  static translate(text: string): string {
    switch (text) {
      case "brown":
        return "marrom";
      case "blue":
        return "azul";
      case "yellow":
        return "amarelo";
      case "green":
        return "verde";
      case "red":
        return "vermelha";
      case "male":
        return "masculino";
      case "female":
        return "feminino";
      default:
        return text;
    }
  }
}
