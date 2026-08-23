<template>
  <div>
    <section class="page-header">
      <p class="page-header__eyebrow">The Roster</p>
      <h1 class="page-header__title text-shimmer">Hierarchy</h1>
      <p class="page-header__desc">The official roster of Hermosa. Filter member profile dossiers by branch or search by name, and click to trace their family lineage in a modal popup.</p>
    </section>

    <section class="hierarchy">
      <div class="roster-controls">
        <div class="roster-search">
          <svg class="roster-search__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            v-model="search" 
            class="roster-search__input" 
            placeholder="Search member name, rank, or branch..." 
            aria-label="Search members"
          >
        </div>
        
        <div class="roster-filters">
          <button 
            class="branch-tab-btn" 
            :class="{ 'is-active': activeFilter === 'all' }" 
            @click="activeFilter = 'all'"
          >All Roster</button>
          <button 
            class="branch-tab-btn" 
            v-for="b in BRANCH_NAMES" 
            :key="b" 
            :class="{ 'is-active': activeFilter === b }" 
            @click="activeFilter = b"
          >{{ b }}</button>
        </div>
      </div>

      <div class="hierarchy__tiers">
        <div class="tier" v-for="tier in hierarchyTiers" :key="tier.rank">
          <div class="tier__label">{{ tier.rank }}{{ tier.items.length > 1 ? 's' : '' }}</div>
          <TransitionGroup name="dossier-list" tag="div" class="tier__row">
            <div class="dossier-card" v-for="m in tier.items" :key="m.id">
              <div class="dossier-card__header">
                <div class="dossier-card__avatar">{{ getInitials(m.name) }}</div>
                <div class="dossier-card__branch-badge" v-if="m.branch === 'Laang'">{{ m.branch }}</div>
              </div>
              <div class="dossier-card__body">
                <div class="dossier-card__name">{{ m.name }}</div>
                <div class="dossier-card__rank-badge">{{ m.rank }}</div>
                <p class="dossier-card__bio">{{ m.bio }}</p>
              </div>
              <div class="dossier-card__footer">
                <button class="dossier-card__tree-btn" @click="openLineageModal(m.id)">
                  Trace Family Lineage
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:-1px; margin-left:4px;">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </div>
    </section>

    <!-- Lineage Modal Popup Overlay -->
    <Teleport to="body">
      <Transition name="modal-pop">
        <div class="lineage-modal-overlay" v-if="isModalOpen" @click.self="closeModal">
          <div class="lineage-modal-card">
            <button class="lineage-modal-close" @click="closeModal" title="Close modal">✕</button>

            <div class="lineage-modal-header" v-if="focusMember">
              <div class="lineage-modal-avatar">{{ getInitials(focusMember.name) }}</div>
              <div>
                <h2 class="lineage-modal-name">{{ focusMember.name }}</h2>
                <div class="lineage-modal-badges">
                  <span class="lineage-modal-rank">{{ focusMember.rank }}</span>
                  <span class="lineage-modal-branch" v-if="focusMember.branch === 'Laang'">{{ focusMember.branch }}</span>
                </div>
              </div>
            </div>

            <div class="lineage-modal-body" v-if="focusMember">
              <!-- Summary Bar -->
              <div class="tree__summary-bar">
                <div class="tree__summary-item">Parent: <strong>{{ focusParentName }}</strong></div>
                <span class="tree__summary-divider">|</span>
                <div class="tree__summary-item">Children: <strong>{{ focusChildren.length }}</strong></div>
              </div>

              <!-- Tree Diagram Container -->
              <div class="tree__diagram">
                <!-- Ancestors / Parent -->
                <template v-if="ancestorChain.length">
                  <div class="tree__gen-label">✦ Parent ✦</div>
                  <div class="tree__gen">
                    <div class="tree__node" v-for="a in ancestorChain" :key="a.id" @click="selectMember(a.id)">
                      <span class="tree__node-name">{{ a.name }}</span>
                      <span class="tree__node-rank">{{ a.rank }}</span>
                    </div>
                  </div>
                  <div class="tree__connector"></div>
                </template>
                <template v-else-if="focusMember.sponsor === null">
                  <div class="tree__origin-badge">✦ Founders · Original Family Table ✦</div>
                </template>

                <!-- Selected Member & Partner Couple -->
                <div class="tree__gen-label">✦ Selected Member {{ focusPartner ? '& Couple' : '' }} ✦</div>
                <div class="tree__gen">
                  <div class="tree__node tree__node--focus">
                    <span class="tree__node-name">{{ focusMember.name }}</span>
                    <span class="tree__node-rank">{{ focusMember.rank }}</span>
                  </div>
                  <div class="tree__node tree__node--couple" v-if="focusPartner" @click="selectMember(focusPartner.id)" title="Click to view partner lineage">
                    <span class="tree__couple-badge">✦ Partner / Couple</span>
                    <span class="tree__node-name">{{ focusPartner.name }}</span>
                    <span class="tree__node-rank">{{ focusPartner.rank }}</span>
                  </div>
                </div>

                <!-- Direct Children -->
                <template v-if="focusChildren.length">
                  <div class="tree__connector"></div>
                  <div class="tree__gen-label">✦ Children ({{ focusChildren.length }}) ✦</div>
                  <div class="tree__gen">
                    <div class="tree__node" v-for="c in focusChildren" :key="c.id" @click="selectMember(c.id)">
                      <span class="tree__node-name">{{ c.name }}</span>
                      <span class="tree__node-rank">{{ c.rank }}</span>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <div class="tree__connector"></div>
                  <div class="tree__empty-card">✦ No direct children listed ✦</div>
                </template>

                <!-- Grandchildren -->
                <template v-if="focusGrandchildren.length">
                  <div class="tree__connector"></div>
                  <div class="tree__gen-label">✦ Next Generation ✦</div>
                  <div class="tree__gen">
                    <div class="tree__node" v-for="g in focusGrandchildren" :key="g.id" @click="selectMember(g.id)">
                      <span class="tree__node-name">{{ g.name }}</span>
                      <span class="tree__node-rank">{{ g.rank }}</span>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { MEMBERS, RANKS, BRANCH_NAMES, byId, childrenOf, getInitials } from '../data/members.js'

const route = useRoute()

const search = ref('')
const activeFilter = ref('all')

const activeMemberId = ref(null)
const isModalOpen = ref(false)

const filteredMembers = computed(() => {
  const q = search.value.toLowerCase().trim()
  const f = activeFilter.value

  return MEMBERS.filter(m => {
    const matchFilter = f === 'all' || m.branch === f || m.rank.toLowerCase() === f.toLowerCase()
    const matchSearch = !q || m.name.toLowerCase().includes(q) || m.rank.toLowerCase().includes(q) || m.branch.toLowerCase().includes(q)
    return matchFilter && matchSearch
  })
})

const hierarchyTiers = computed(() => {
  return RANKS.map(rank => {
    const items = filteredMembers.value.filter(m => m.rank === rank)
    return { rank, items }
  }).filter(t => t.items.length > 0)
})

const focusMember = computed(() => {
  if (!activeMemberId.value) return null
  return byId(activeMemberId.value) || null
})

const focusPartner = computed(() => {
  if (!focusMember.value || !focusMember.value.partnerId) return null
  return byId(focusMember.value.partnerId) || null
})

const ancestorChain = computed(() => {
  if (!activeMemberId.value) return []
  const current = byId(activeMemberId.value)
  if (!current || current.sponsor === null) return []

  if (current.sponsor === 8 || current.sponsor === 12) {
    const p1 = byId(8)
    const p2 = byId(12)
    return [p1, p2].filter(Boolean)
  }

  const chain = []
  let parent = byId(current.sponsor)
  while (parent) {
    chain.unshift(parent)
    parent = parent.sponsor ? byId(parent.sponsor) : null
  }
  return chain
})

const focusChildren = computed(() => {
  if (!activeMemberId.value) return []
  return childrenOf(activeMemberId.value)
})

const focusGrandchildren = computed(() => {
  return focusChildren.value.flatMap(c => childrenOf(c.id))
})

const focusParentName = computed(() => {
  if (!focusMember.value) return 'Lineage Head'
  if (focusMember.value.id === 8 || focusMember.value.id === 12) {
    return 'Shared Couple Lineage'
  }
  if (focusMember.value.sponsor === null) return 'Lineage Head'
  if (focusMember.value.sponsor === 8 || focusMember.value.sponsor === 12) {
    return 'Serenity $aint & Serenity $in'
  }
  const p = byId(focusMember.value.sponsor)
  return p ? p.name : 'Lineage Head'
})

function openLineageModal(id) {
  activeMemberId.value = Number(id)
  isModalOpen.value = true
}

function selectMember(id) {
  activeMemberId.value = Number(id)
}

function closeModal() {
  isModalOpen.value = false
}

function handleKeyDown(e) {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

function syncMemberFromRoute() {
  if (route.query.member) {
    const id = Number(route.query.member)
    if (!Number.isNaN(id)) {
      openLineageModal(id)
    }
  }
}

onMounted(() => {
  syncMemberFromRoute()
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})

watch(() => route.query.member, () => {
  syncMemberFromRoute()
})
</script>
