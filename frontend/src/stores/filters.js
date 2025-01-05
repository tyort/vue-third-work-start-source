import { defineStore } from "pinia";

export const useFiltersStore = defineStore("filters", {
  state: () => ({
    search: "",
    users: [],
    statuses: [],
  }),
  getters: {
    filters: ({ search, users, statuses }) => ({
      search,
      users,
      statuses,
    }),
  },
  actions: {},
});
