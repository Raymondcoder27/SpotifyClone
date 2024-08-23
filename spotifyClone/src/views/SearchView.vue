<script setup>
    import CategorySelect from '@/components/CategorySelect.vue';
</script>

<template>
    <div class="p-8">
    <button
    type="button"
    class="text-white text-2xl font-semibold hover:underline cursor-pointer">
      Podcasts to make you smarter
    </button>

    <div class="py-1.5"></div>

    <div class="flex items-center">
      <CategorySelect image="https://picsum.photos/id/40/300/300" category="Podcasts" title="Title is here" subTitle="Subtitle is here" />

    </div>
  </div>
</template>