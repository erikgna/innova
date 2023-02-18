export class DateTransformer {
  static toBrazil(date: string): string {
    const splited = date.split("-");

    const formatedDate = splited[2] + "/" + splited[1] + "/" + splited[0];

    return formatedDate;
  }
}
