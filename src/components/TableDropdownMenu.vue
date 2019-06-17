<template>
  <div class="t-button-group">
    <b-dropdown
      :text="selectedFields.length + ' Columns selected'"
      toggle-class="t-button t-button-dropdown-toggle"
      menu-class="t-dropdown-menu"
    >
      <b-dropdown-form>
        <b-form-checkbox
          v-model="selectAll"
          @change="toggleSelectAll"
          class="font-weight-bold"
        >{{ 'Select All' }}</b-form-checkbox>
        <b-form-checkbox-group v-model="selectedFields" :options="options" stacked></b-form-checkbox-group>
      </b-dropdown-form>
    </b-dropdown>
  </div>
</template>

<script>
import { mapState } from "vuex";

import { options } from "../constants";

export default {
  name: "TableDropdownMenu",
  data() {
    return {
      selectAll: true,
      options
    };
  },
  computed: {
    selectedFields: {
      get() {
        return this.$store.state.table.selectedFields;
      },
      set(selectedFields) {
        this.$store.dispatch("table/selectedFields", { selectedFields });
      }
    }
  },
  watch: {
    selectedFields(newValue) {
      if (newValue.length === 0) {
        this.selectAll = false;
      } else if (newValue.length === this.options.length) {
        this.selectAll = true;
      } else {
        this.selectAll = false;
      }
    }
  },
  methods: {
    toggleSelectAll(checked) {
      const selectedFields = checked
        ? this.options.slice().map(({ value }) => value)
        : [];
      this.$store.dispatch("table/selectedFields", { selectedFields });
    }
  }
};
</script>

<style>
.t-button-dropdown-toggle {
  width: 158px;
  height: 32px;

  font-size: 14px;

  color: #333;
}

.t-button-dropdown-toggle:hover,
.t-button-dropdown-toggle:active {
  border: 1px solid #4b74ff;
  border-radius: 2px;
  background-color: transparent;
  color: #333;
}

.btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
  border: 1px solid #4b74ff;
  background-color: transparent;
  color: #333;
}

.t-button-dropdown-toggle:focus {
  outline: none;
  box-shadow: none !important;
}

.t-dropdown-menu {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  white-space: nowrap;
  font-size: 14px;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  width: 10px;
  height: 10px;
  color: #fff;
  border-radius: 0.05rem;
  border-color: #4b74ff;
  background-color: #4b74ff;
}

.custom-checkbox .custom-control-input ~ .custom-control-label::before {
  width: 10px;
  height: 10px;
  border-radius: 0.05rem;
  border-color: #fff;
  background-color: #fff;
}

.custom-control-label::after {
  top: 0.125rem;
  left: -1.625rem;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
  width: 14px;
  height: 14px;
  border: 1px solid #c6cbd4;
  border-radius: 0.05rem;
  background-image: none;
}

.custom-checkbox .custom-control-input ~ .custom-control-label::after {
  width: 14px;
  height: 14px;
  border: 1px solid #c6cbd4;
  border-radius: 0.05rem;
  background-image: none;
}
</style>
