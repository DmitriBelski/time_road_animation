<template>
  <div>
    <svgAnimations
      :count="18"
      :size="1000"
    >
    </svgAnimations>
  </div>
</template>

<script>
import svgAnimations from './components/svgAnimations';

export default {
  name: 'App',
  components: {
    svgAnimations
  }
}
</script>
