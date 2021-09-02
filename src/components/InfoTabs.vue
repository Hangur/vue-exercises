<template>
  <div class="info-tabs">
    <ul>
      <span
        class="tabs"
        :class="{ activeTab: selectedTab === tab }"
        v-for="tab in tabs"
        @click="selectedTab = tab"
        :key="tab"
        >{{ tab }}
      </span>
    </ul>
    <div v-show="selectedTab === 'Shipping'">
      <p>{{ shipping }}</p>
    </div>

    <div v-show="selectedTab === 'Details'">
      <ul>
        <li v-for="detail in details" :key="detail">{{ detail }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoTabs",
  props: {
    shipping: {
      required: true,
    },
    details: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tabs: ["Shipping", "Details"],
      selectedTab: "Shipping",
    };
  },
};
</script>

<style scoped></style>
