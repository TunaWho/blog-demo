<template>
  <ul class="pagination">
    <li class="page-item">
      <a
        href="#"
        class="page-link"
        :class="isInFirstPage ? 'disabled' : ''"
        :disabled="isInFirstPage"
        @click.prevent="onClickFirstPage"
      >First</a>
    </li>
    <li class="page-item">
      <a
        href="#"
        class="page-link"
        :class="isInFirstPage ? 'disabled' : ''"
        :disabled="isInFirstPage"
        @click.prevent="onClickPreviousPage"
      >«</a>
    </li>
    <li v-for="page in pages" :key="page.id" class="page-item">
      <a
        href="#"
        class="page-link"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
        @click.prevent="onClickPage(page.name)"
      >{{ page.name }}</a>
    </li>
    <li class="page-item">
      <a
        href="#"
        class="page-link"
        :class="isInLastPage ? 'disabled' : ''"
        :disabled="isInLastPage"
        @click.prevent="onClickNextPage"
      >»</a>
    </li>
    <li class="page-item">
      <a
        href="#"
        class="page-link"
        :class="isInLastPage ? 'disabled' : ''"
        :disabled="isInLastPage"
        @click.prevent="onClickLastPage"
      >Last</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PaginationItem',
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 5,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      if (this.totalPages === 0) {
        return true;
      }
      return this.currentPage === this.totalPages;
    },
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }
      // When on the last page
      if (this.totalPages < this.maxVisibleButtons) {
        return 1;
      }
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }
      // When in between
      return this.currentPage - 1;
    },
    endPage() {
      if (this.totalPages === 0) {
        return 1;
      }
      if (this.totalPages < this.maxVisibleButtons) {
        return this.totalPages;
      }
      return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
    },
    pages() {
      const range = [];
      for (let i = this.startPage; i <= this.endPage; i++) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }
      return range;
    },
  },
  methods: {
    onClickFirstPage() {
      if (this.isInFirstPage) {
        return false;
      }
      this.$emit('pageChanged', 1);
    },
    onClickPreviousPage() {
      if (this.isInFirstPage) {
        return false;
      }
      this.$emit('pageChanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pageChanged', page);
    },
    onClickNextPage() {
      if (this.isInLastPage) {
        return false;
      }
      this.$emit('pageChanged', this.currentPage + 1);
    },
    onClickLastPage() {
      console.log('onClickLastPage');
      if (this.isInLastPage) {
        return false;
      }
      this.$emit('pageChanged', this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  list-style-type: none;
  float: right;
  margin: 10px 0;
  .page-item {
    a.disabled {
      color: #ccc;
      cursor: no-drop;
    }
    .active {
      background-color: #007BFF;
      color: #ffffff !important;
      font-weight: bold;
    }
  }
}
button[disabled],
html input[disabled] {
  cursor: default;
  color: lightgray;
}
</style>
