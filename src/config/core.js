import CryptoJS from 'crypto-js';

const coreDetails = {
  base64url: function(source) {
    let encodedSource = CryptoJS.enc.Base64.stringify(source);
    encodedSource = encodedSource.replace(/=+$/, '');
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');
    return encodedSource;
  },

  generateToken: function() {
    const header = {
      alg: 'HS256',
      typ: 'JWT'
    };
    const stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    const encodedHeader = this.base64url(stringifiedHeader);
    return encodedHeader;
  }
};
export default coreDetails;
