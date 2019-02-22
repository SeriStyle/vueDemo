<template>
  <div>
      <input
    type="text"
    class="input"
    :value="value"
    v-on="listeners"
  >

  v-on:input="$emit('input', $event.target.value)" 

  {{proptext}}
  </div>

</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    proptext:{
      type:String,
      default:'',
    }
  },
  created() {
   
  },
  mounted() {
    console.log("--------------");
  },
  computed: {
    listeners () {
      var _this=this;
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: function(event) {
        console.log();
          _this.$emit('input', event.target.value)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/* @import '../variables.scss'; */

.input {
  width: 300px;
  padding: 8px 10px;
  border: 1px solid  #32485F;
}
</style>
