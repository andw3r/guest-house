<template>
  <ul class="nav__list">
    <NavItem
      v-bind:item="item"
      v-bind:key="item.id"
      v-for="item of items" 
    />
  </ul>
</template>

<script>
import NavItem from './NavItem'
export default {
  name: 'NavList',
  props: ['items'],
  components: {
    NavItem,
  },
}
</script>
