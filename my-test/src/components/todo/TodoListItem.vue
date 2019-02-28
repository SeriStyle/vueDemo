<template>
  <div>
      <li>
          {{ todo.text }}
          <button @click="$emit('remove', todo.id)">
            X
          </button>
        </li>
        <!-- <p @click="$emit('a','你是谁啊？？？？？？？？')">aaaaaaaaaaa</p> -->
  </div>

</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  created() {
    this.a();
  },
  methods: {
    a(){
      
      this.$emit("b","我是子组件的，你是谁啊？？");
    },
  },
}
</script>