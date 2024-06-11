<template>
    <div class="container py-5">
        <div class="row">
            <div class="col">
                <div class="mb-5">
                    <h3
                        class="text-uppercase border-start border-5 border-primary ps-3"
                    >
                        Every Monsters
                    </h3>
                    <h5
                        class="text-uppercase border-start border-5 border-primary ps-3 mb-4"
                    >
                        Page 1
                    </h5>
                    <div
                        v-for="monster in monsters"
                        :key="monster._id"
                        class="d-flex overflow-hidden mb-3 bg-light"
                    >
                        <img
                            class="img-fluid"
                            :src="monster.image"
                            style="
                                width: 100px;
                                height: 100px;
                                object-fit: cover;
                            "
                            alt=""
                        />
                        <router-link
                            :to="{
                                name: 'MonsterDetail',
                                params: { id: monster._id },
                            }"
                            class="h5 d-flex align-items-center bg-light px-3 mb-0"
                            >{{ monster.name }}</router-link
                        >
                    </div>
                </div>
                <button type="button" class="btn btn-outline-success">
                    Prev
                </button>
                <button type="button" class="btn btn-outline-success">
                    Next
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { useMonsterStore } from "../stores/index.js";
import { onMounted, computed } from "vue";

export default {
    name: "MonsterList",
    setup() {
        const store = useMonsterStore();

        onMounted(() => {
            store.fetchMonsters();
        });

        const monsters = computed(() => store.monsters);

        return {
            monsters,
        };
    },
};
</script>
