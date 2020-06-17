<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand " :to="{ name: 'login' }">{{
        logoTitle
      }}</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link
            class="nav-item nav-link active"
            v-if="authenticated"
            :to="{ name: 'todo' }"
            >{{ $t("welcome") }}, {{ username }}</router-link
          >
          <button
            class="btn btn-sm btn-outline-danger"
            type="button"
            @click="logout"
            v-if="authenticated"
          >
            {{ $t("logout") }}
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
<script src="./header.js"></script>
<style scoped>
a.navbar-brand.router-link-exact-active.router-link-active {
  border: 1px #f8f9fa solid;
  padding: 14px;
  font-weight: 900;
}
</style>
