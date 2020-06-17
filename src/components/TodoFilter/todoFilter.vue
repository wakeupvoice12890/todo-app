<template>
  <div>
    <button
      :style="{ backgroundColor: filter == 'all' ? updatedColor : '#fff' }"
      :class="{ active: filter == 'all' }"
      @click="changeFilter('all')"
    >
      {{ $t("btn.all") }}
    </button>
    <button
      :style="{ backgroundColor: filter == 'active' ? updatedColor : '#fff' }"
      :class="{ active: filter == 'active' }"
      @click="changeFilter('active')"
    >
      {{ $t("btn.active") }}
    </button>
    <button
      :style="{
        backgroundColor: filter == 'completed' ? updatedColor : '#fff'
      }"
      :class="{ active: filter == 'completed' }"
      @click="changeFilter('completed')"
    >
      {{ $t("btn.completed") }}
    </button>
  </div>
</template>

<script src="./todoFilter.js"></script>
