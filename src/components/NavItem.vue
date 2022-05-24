<template>
  <li class="nav__item">
    <a href="#">{{item}}</a>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true 
    }
  }, 
  name: 'NavItem',
}
</script>
