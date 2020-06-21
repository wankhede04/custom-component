import { sha224, sha256 } from 'js-sha256';

export class Encryption {

  constructor() {}

  public encrypt256(key : string) {
    let cipherText = sha256(key);
    let randomNumber;

    while (true) {

      randomNumber = Math.floor(Math.random() * 100);

      if (randomNumber < 64) {
        break;
      }

    }

    return cipherText.substr(0, randomNumber).toUpperCase() + '@' + cipherText.substr(randomNumber);
  }

  public encrypt224(key : string) {
    return sha224(key)
  }
}
