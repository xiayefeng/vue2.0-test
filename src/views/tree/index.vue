<template>
  <div class="table-wrap">
    <p class="top-title">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur,
      porro? Corporis fugiat illo, aliquam, autem reiciendis quibusdam nihil,
      labore eius pariatur provident quas rerum minus tenetur iure aspernatur
      fugit eos.
    </p>
    <!-- <header class="top-header"></header> -->
    <div class="content">
      <aside class="left">
        <header class="top-header"></header>
      </aside>
      <main class="main"></main>
    </div>
  </div>
</template>
<script>
export default {
  name: "TreeCom",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.table-wrap {
  // height: 200vh;

  .content {
    display: flex;
  }
  .top-header {
    position: sticky;
    width: 100%;
    top: 60px;
    // bottom: 90px;
    height: 700px;
    border: 1px solid red;
  }
  .left {
    width: 300px;
    height: 200vh;
    overflow-y: visible;
  }
  .main {
    flex: 1;
    overflow-y: visible;
  }
}
</style>