import { AES, enc } from 'crypto-js';
import privateData from './private';
const localSession = {
  storage: sessionStorage,
  secret: privateData.privateKey,
  set: function(key, value) {
    value = this.bsEncrypt(value);
    this.storage.setItem(key, value);
  },
  get: function(key) {
    let data = this.storage.getItem(key);
    data = this.bsDecrypt(data);
    if (data != null && data != '{}') {
      try {
        return JSON.parse(data);
      } catch (error) {
        console.log(error);
      }
    }
    return null;
  },
  flush: function(key, exception = null) {
    const exceptionitem = [];
    if (key != null && key != undefined) {
      this.storage.removeItem(key);
    } else {
      let i = 0;
      if (exception) {
        exception.forEach(element => {
          exceptionitem[i] = this.storage.get(element);
          i++;
        });

        this.storage.clear();
        exception.forEach(element => {
          this.storage.get(element, exceptionitem[i]);
          i++;
        });
      } else {
        this.storage.clear();
      }
    }
  },

  bsEncrypt: function(data) {
    const newString = JSON.stringify(data);
    return AES.encrypt(newString, this.secret).toString();
  },
  bsDecrypt: function(data) {
    if (!data) {
      return data;
    }
    const newString = AES.decrypt(data, this.secret);
    return newString.toString(enc.Utf8);
  }
};
export default localSession;
