<script setup>
    import CategorySelect from '../components/CategorySelect.vue';
</script>

<template>
    <div class="p-8">
    <button
    type="button"
    class="text-white text-2xl font-semibold hover:underline cursor-pointer">
      What do you want to play?
    </button>

    <div class="py-1.5"></div>

    <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
      <CategorySelect image="https://picsum.photos/id/40/300/300" category="Podcasts" title="Title is here" subTitle="Subtitle is here" />
      <CategorySelect image="https://picsum.photos/id/41/300/300" category="Audio Book" title="Title is here" subTitle="Subtitle is here" />
      <CategorySelect image="https://picsum.photos/id/42/300/300" category="New Release" title="Title is here" subTitle="Subtitle is here" />
      <CategorySelect image="https://picsum.photos/id/43/300/300" category="Made For You" title="Title is here" subTitle="Subtitle is here" />
      <CategorySelect image="https://picsum.photos/id/44/300/300" category="Podcasts" title="Title is here" subTitle="Subtitle is here" />
      <CategorySelect image="https://picsum.photos/id/45/300/300" category="Audio Book" title="Title is here" subTitle="Subtitle is here" />
      <CategorySelect image="https://picsum.photos/id/46/300/300" category="New Release" title="Title is here" subTitle="Subtitle is here" />
      <CategorySelect image="https://picsum.photos/id/47/300/300" category="Made For You" title="Title is here" subTitle="Subtitle is here" />
      <CategorySelect image="https://picsum.photos/id/48/300/300" category="Podcasts" title="Title is here" subTitle="Subtitle is here" />
      <CategorySelect image="https://picsum.photos/id/49/300/300" category="Audio Book" title="Title is here" subTitle="Subtitle is here" />
      <CategorySelect image="https://picsum.photos/id/50/300/300" category="New Release" title="Title is here" subTitle="Subtitle is here" />
      <CategorySelect image="https://picsum.photos/id/60/300/300" category="Made For You" title="Title is here" subTitle="Subtitle is here" />
    </div>
  </div>
</template>