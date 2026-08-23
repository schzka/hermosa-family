<template>
  <div>
    <section class="page-header">
      <p class="page-header__eyebrow">Family Wings</p>
      <h1 class="page-header__title text-shimmer">Family Wings</h1>
      <p class="page-header__desc">Hermosa stands as one unified family. Explore our Founders, OG veterans, Members, and Laang relatives.</p>
    </section>

    <section class="branches">
      <div class="branches__list">
        <div 
          class="branch" 
          v-for="b in BRANCH_NAMES" 
          :key="b" 
          :class="{ 'is-open': openBranches[b] }"
        >
          <div class="branch__head" @click="toggleBranch(b)">
            <span class="branch__name">{{ b }}</span>
            <span class="branch__count">{{ getBranchMembers(b).length }} members</span>
            <span class="branch__chevron">▾</span>
          </div>
          <Transition name="fade">
            <div class="branch__body" v-if="openBranches[b]">
              <p class="branch__desc">{{ BRANCH_DESC[b] }}</p>
              <div class="branch__members">
                <router-link 
                  v-for="m in getBranchMembers(b)" 
                  :key="m.id"
                  :to="`/hierarchy?member=${m.id}`"
                  class="branch__member"
                >
                  {{ m.name }} · <small>{{ m.rank }}</small>
                </router-link>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MEMBERS, BRANCH_NAMES, BRANCH_DESC } from '../data/members.js'

const openBranches = ref({
  'Founders': true,
  'OG': true,
  'Members': true,
  'Laang': true
})

function toggleBranch(b) {
  openBranches.value[b] = !openBranches.value[b]
}

function getBranchMembers(b) {
  return MEMBERS.filter(m => m.branch === b)
}
</script>
