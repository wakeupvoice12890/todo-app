<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <h2>Authentication</h2>
        <form @submit.prevent="signIn">
          <div class="form-group">
            <label for="emaiAddress">Email address</label>
            <input
              type="email"
              class="form-control"
              :class="{ 'is-invalid': authError }"
              id="emaiAddress"
              v-model="email"
              aria-describedby="emailHelp"
              required
            />
            <div v-if="authError" class="invalid-feedback">
              Please provide right credentials!
            </div>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control"
              id="password"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import jwt from 'jsonwebtoken';
import CryptoJS from 'crypto-js';
import privateData from '../../config/private';
import coreDetails from '../../config/core';
import localSession from '@/config/localSession';

export default {
  name: 'login-component',
  data() {
    return {
      email: '',
      password: '',
      authError: false
    };
  },
  methods: {
    signIn() {
      const data = {
        email: this.email,
        password: this.password,
        iat: privateData.iat
      };
      const encodedHeader = coreDetails.generateToken();
      const stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
      const encodedData = coreDetails.base64url(stringifiedData);
      let token = `${encodedHeader}.${encodedData}`;
      let signature = CryptoJS.HmacSHA256(token, privateData.privateKey);
      signature = coreDetails.base64url(signature);
      let signedToken = `${token}.${signature}`;
      if (signedToken !== privateData.privateToken) {
        this.authError = true;
        this.password = '';
        return false;
      }
      const decoded = jwt.verify(signedToken, privateData.privateKey);
      this.$store.dispatch('userDetails', decoded);
      localSession.set('accessToken', signedToken);
      localSession.set('userDetails', decoded);
      this.$store.dispatch('loggedIn', signedToken);
      this.$router.push({ name: 'todo' });
    }
  }
};
</script>
