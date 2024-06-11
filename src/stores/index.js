import { defineStore } from "pinia";
import axios from "axios";
import { reactive } from "vue";

export const useMonsterStore = defineStore("monsterStore", {
  state: () =>
    reactive({
      monsters: [],
      monster: null,
    }),
  actions: {
    async fetchMonsters() {
      try {
        const response = await axios.get(
          "https://metallo.ew.r.appspot.com/monsters",
        );
        console.log(response.data);
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
        console.log(response.data);
        this.monster = response.data;
      } catch (error) {
        console.error("Error fetching monster:", error);
      }
    },
  },
});
