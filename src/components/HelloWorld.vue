<template>
  <h1>HelloWorld</h1>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  created() {
    const someObject: any = { a: 1 };
    if (someObject?.b) {
    }
  }
}
</script>
