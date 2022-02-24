<template>
  <prismic-rich-text :field="text" class="text-color-2 mt-6 max-w-[540px]" />
</template>

<script>
export default {
  props: {
    text: {
      type: Array,
      required: true,
    },
  },
}
</script>