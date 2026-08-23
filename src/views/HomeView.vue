<template>
  <div>
    <section class="hero">
      <div class="hero__content">
        <p class="eyebrow"><span class="eyebrow-badge">✦ EST. 2020 &nbsp;·&nbsp; ROLEPLAY FAMILY ✦</span></p>
        <h1 class="hero__title text-shimmer">HERMOSA</h1>
        <p class="hero__tagline">Sangre no se compra. Se gana.<br><span class="hero__tagline-sub">Blood isn't bought. It's earned.</span></p>
        <div class="hero__cta">
          <router-link to="/hierarchy" class="btn btn--gold">View Roster</router-link>
          <a href="#about" class="btn btn--ghost">About Us</a>
        </div>
      </div>
    </section>

    <section class="about" id="about">
      <div class="section-head">
        <span class="section-head__eyebrow">The Legacy</span>
        <h2 class="section-head__title">About The Family</h2>
        <p class="section-head__desc">Built on bloodlines, loyalty, discretion, and unspoken authority.</p>
      </div>

      <div class="about__grid">
        <div class="about__copy-card">
          <p class="about__lead">Hermosa is built on founding sibling bloodlines and strong family wings — where every member is bound by loyalty to the Hermosa name.</p>
          <div class="about__copy">
            <p>Founded from a shared table of siblings and driven by ambition, Hermosa encompasses founding lineages, core family members, OG veterans, and the Laang family.</p>
            <p>Every member who joins climbs through the ranks by proving their loyalty to the family's legacy, business, and people.</p>
          </div>
        </div>

        <div class="about__chips">
          <div class="stat-card">
            <div class="stat-card__value">2020</div>
            <div class="stat-card__label">Founded</div>
          </div>
          <div class="stat-card">
            <div class="stat-card__value">4</div>
            <div class="stat-card__label">Family Groups</div>
          </div>
          <div class="stat-card">
            <div class="stat-card__value">70</div>
            <div class="stat-card__label">Total Members</div>
          </div>
          <div class="stat-card">
            <div class="stat-card__value">4</div>
            <div class="stat-card__label">Rank Levels</div>
          </div>
        </div>
      </div>
    </section>

    <section class="quicklinks">
      <div class="section-head">
        <span class="section-head__eyebrow">Explore</span>
        <h2 class="section-head__title">Family Overview</h2>
        <p class="section-head__desc">Navigate through the family order, wings, and member profile dossiers.</p>
      </div>
      <div class="quicklinks__grid quicklinks__grid--two">
        <router-link class="quicklink" to="/hierarchy">
          <div class="quicklink__badge">ROSTER & RANKS</div>
          <div class="quicklink__title">Hierarchy</div>
          <p class="quicklink__desc">Explore the 70 active Hermosa family profile dossiers by rank or branch, and open any member's family lineage modal.</p>
          <span class="quicklink__arrow">View Roster <span>→</span></span>
        </router-link>
        <router-link class="quicklink" to="/branches">
          <div class="quicklink__badge">FAMILY WINGS</div>
          <div class="quicklink__title">Branches</div>
          <p class="quicklink__desc">Explore the Founders, OG, Members, and Laang relatives.</p>
          <span class="quicklink__arrow">View Branches <span>→</span></span>
        </router-link>
      </div>
    </section>
  </div>
</template>
