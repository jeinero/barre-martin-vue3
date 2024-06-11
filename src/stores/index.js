import { defineStore } from "pinia";
import axios from "axios";
import { reactive } from "vue";

export const useMonsterStore = defineStore("monsterStore", {
  state: () =>
    reactive({
      monsters: [],
      monster: null,
      currentPage: 1,
      pageSize: 5,
    }),
  actions: {
    async fetchMonsters() {
      try {
        const response = await axios.get(
          "https://metallo.ew.r.appspot.com/monsters",
        );
        this.monsters = response.data;
      } catch (error) {
        console.error("Error fetching monsters:", error);
      }
    },
    async fetchMonster(id) {
      try {
        const response = await axios.get(
          `https://metallo.ew.r.appspot.com/monsters/${id}`,
        );
        this.monster = response.data;
      } catch (error) {
        console.error("Error fetching monster:", error);
      }
    },
  },
  getters: {
    paginatedMonsters(state) {
      const start = (state.currentPage - 1) * state.pageSize;
      const end = start + state.pageSize;
      return state.monsters.slice(start, end);
    },
    totalPages(state) {
      return Math.ceil(state.monsters.length / state.pageSize);
    },
  },
});
