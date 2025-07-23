const caesarCipher = function thatEncryptsStringThroughCaesarCipher(
  string,
  shiftFactor
) {
  function isLetter(char) {
    return char.length === 1 && char.match(/[a-z]/i);
  }

  function encryptLetter(char, factor) {
    const asciiCode = char.charCodeAt(0);
    let minAscii, maxAscii;

    // Determine the ascii range for the letter which is important for wrapping
    if (asciiCode <= 90) {
      minAscii = 65;
      maxAscii = 90;
    } else {
      minAscii = 97;
      maxAscii = 122;
    }

    let asciiCipher = asciiCode + factor;

    // If the ciphered code falls out of range, it needs to wrap
    while (asciiCipher < minAscii || asciiCipher > maxAscii) {
      // +1 -1 are there to make sure the right letter is returned
      // If the diff between cipher and min/max ascii is 1, then return the first letter, not min/max Ascii +/- 1
      if (asciiCipher < minAscii) {
        asciiCipher = maxAscii + 1 - (minAscii - asciiCipher);
      } else {
        asciiCipher = minAscii - 1 + (asciiCipher - maxAscii);
      }
    }

    return String.fromCharCode(asciiCipher);
  }

  let encryptedString = '';
  for (let i = 0; i < string.length; i += 1) {
    // If char is a letter, convert it to its shifted counterpart, otherwise just copy/paste it
    if (isLetter(string[i])) {
      encryptedString += encryptLetter(string[i], shiftFactor);
    } else {
      encryptedString += string[i];
    }
  }

  return encryptedString;
};

export default caesarCipher;
