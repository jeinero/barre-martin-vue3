<template>
    <div v-if="isLoading" class="container-fluid py-5">
        <div class="container">
            <p>Loading...</p>
        </div>
    </div>
    <div v-else class="container-fluid py-5">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-5 mb-5 mb-lg-0" style="min-height: 500px">
                    <div class="position-relative h-100">
                        <img
                            class="position-absolute w-100 h-100 rounded"
                            :src="monster.image"
                            style="object-fit: cover"
                        />
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="border-start border-5 border-primary ps-5 mb-5">
                        <h6 class="text-primary text-uppercase">
                            {{ monster.category }}
                        </h6>
                        <h1 class="display-5 text-uppercase mb-0">
                            {{ monster.name }}
                        </h1>
                    </div>
                    <h4 class="text-body mb-4">
                        {{ monster.description || "No description available" }}
                    </h4>
                    <div class="border-start border-5 border-primary ps-5 mb-5">
                        <h6 class="text-primary text-uppercase">DROPS</h6>
                        <ul v-if="monster.drops">
                            <li v-for="drop in monster.drops" :key="drop">
                                {{ drop }}
                            </li>
                        </ul>
                        <p v-else>No drops available</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useMonsterStore } from "../stores/index.js";
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";

export default {
    name: "MonsterDetail",
    setup() {
        const store = useMonsterStore();
        const route = useRoute();
        const isLoading = ref(true);

        onMounted(async () => {
            await store.fetchMonster(route.params.id);
            isLoading.value = false;
        });

        const monster = computed(() => store.monster);

        return {
            monster,
            isLoading,
        };
    },
};
</script>
