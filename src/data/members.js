export const RANKS = ['Founder', 'OG Member', 'Member', 'Associate']

export const BRANCH_NAMES = ['Founders', 'OG', 'Members', 'Laang']

export const BRANCH_DESC = {
  'Founders': 'The founding siblings of Hermosa. First blood, original table, and core legacy.',
  'OG': 'Original veterans and foundational OG members of the family.',
  'Members': 'Dedicated family members operating under the Hermosa flag.',
  'Laang': 'Distant relatives and Laang bloodline wing bound to the Hermosa family.'
}

export const MEMBERS = [
  // --- FOUNDERS ---
  { id: 1, name: 'JD Hermosa', rank: 'Founder', branch: 'Founders', sponsor: null, bio: 'Original founding table.' },
  { id: 2, name: 'Keny Hermosa', rank: 'Founder', branch: 'Founders', sponsor: null, bio: 'Original founding table.' },
  { id: 3, name: 'Choco Hermosa', rank: 'Founder', branch: 'Founders', sponsor: null, bio: 'Parent of Pabs, Sycha, Chuya, Crispy, and Tetsuya.' },
  { id: 4, name: 'Ralph Hermosa', rank: 'Founder', branch: 'Founders', sponsor: null, bio: 'Original founding table.' },
  { id: 5, name: 'Ron Hermosa', rank: 'Founder', branch: 'Founders', sponsor: null, bio: 'Original founding table.' },
  { id: 6, name: 'Lakan Hermosa', rank: 'Founder', branch: 'Founders', sponsor: null, bio: 'Parent of Papi and Rayuu (Kozie).' },
  { id: 7, name: 'Cleoh Hermosa', rank: 'Founder', branch: 'Founders', sponsor: null, bio: 'Original founding table.' },
  { id: 8, name: 'Serenity $aint Hermosa', rank: 'Founder', branch: 'Founders', sponsor: null, bio: 'Partnered with Serenity $in. Shared parent of Clyde, Shanty, Riss, Ryujin, and Basti.' },
  { id: 9, name: 'Obet Hermosa', rank: 'Founder', branch: 'Founders', sponsor: null, bio: 'Parent of Andoy.' },
  { id: 10, name: 'Kira Hermosa', rank: 'Founder', branch: 'Founders', sponsor: null, bio: 'Original founding table.' },
  { id: 11, name: 'Natalie Hermosa', rank: 'Founder', branch: 'Founders', sponsor: null, bio: 'Original founding table.' },

  // --- OG ---
  { id: 31, name: 'Yotam Saint Hermosa', rank: 'OG Member', branch: 'OG', sponsor: null, bio: 'Foundational veteran. Parent of Vinny and Hanz.' },
  { id: 32, name: 'Hero Saint Hermosa', rank: 'OG Member', branch: 'OG', sponsor: null, bio: 'Foundational veteran. Parent of Kenji.' },
  { id: 33, name: 'Miggy Saint Hermosa', rank: 'OG Member', branch: 'OG', sponsor: null, bio: 'Foundational veteran.' },
  { id: 34, name: 'Jai Saint Hermosa', rank: 'OG Member', branch: 'OG', sponsor: null, bio: 'Foundational veteran.' },
  { id: 35, name: 'CJ Saint Hermosa', rank: 'OG Member', branch: 'OG', sponsor: null, bio: 'Foundational veteran.' },
  { id: 36, name: 'Sylph Saint Hermosa', rank: 'OG Member', branch: 'OG', sponsor: null, bio: 'Foundational veteran.' },
  { id: 37, name: 'Oblak Saint Hermosa', rank: 'OG Member', branch: 'OG', sponsor: null, bio: 'Foundational veteran.' },
  { id: 38, name: 'Crispy Saint Hermosa', rank: 'OG Member', branch: 'OG', sponsor: null, bio: 'Foundational veteran.' },
  { id: 39, name: 'Sushi Saint Hermosa', rank: 'OG Member', branch: 'OG', sponsor: null, bio: 'Foundational veteran.' },
  { id: 40, name: 'Balweg Saint Hermosa', rank: 'OG Member', branch: 'OG', sponsor: null, bio: 'Foundational veteran.' },
  { id: 41, name: 'Louise Saint Hermosa', rank: 'OG Member', branch: 'OG', sponsor: null, bio: 'Foundational veteran.' },
  { id: 42, name: 'Berdugo Saint Hermosa', rank: 'OG Member', branch: 'OG', sponsor: null, bio: 'Foundational veteran.' },
  { id: 43, name: 'Nickler Saint Hermosa', rank: 'OG Member', branch: 'OG', sponsor: null, bio: 'Foundational veteran.' },
  { id: 44, name: 'Emas Saint Hermosa', rank: 'OG Member', branch: 'OG', sponsor: null, bio: 'Foundational veteran.' },
  { id: 45, name: 'Andoy Saint Hermosa', rank: 'OG Member', branch: 'OG', sponsor: 9, bio: 'Lineage under Obet Hermosa.' },
  { id: 46, name: 'Kenji Saint Hermosa', rank: 'OG Member', branch: 'OG', sponsor: 32, bio: 'Lineage under Hero.' },
  { id: 47, name: 'Vinny Saint Hermosa', rank: 'OG Member', branch: 'OG', sponsor: 31, bio: 'Lineage under Yotam.' },

  // --- MEMBERS ---
  { id: 12, name: 'Serenity $in Hermosa', rank: 'Member', branch: 'Members', sponsor: null, bio: 'Partnered with Serenity $aint. Shared parent of Clyde, Shanty, Riss, Ryujin, and Basti.' },
  { id: 13, name: 'Lucifer (Kulas) Hermosa', rank: 'Member', branch: 'Members', sponsor: null, bio: 'Active family line.' },
  { id: 14, name: 'Yongz Hermosa', rank: 'Member', branch: 'Members', sponsor: null, bio: 'Active family line.' },
  { id: 15, name: 'Sushi $in Hermosa', rank: 'Member', branch: 'Members', sponsor: 25, bio: 'Lineage under Sunday (Thomas).' },
  { id: 16, name: 'Sycha Hermosa', rank: 'Member', branch: 'Members', sponsor: 3, bio: 'Lineage under Choco Hermosa.' },
  { id: 17, name: 'Chuya Hermosa', rank: 'Member', branch: 'Members', sponsor: 3, bio: 'Lineage under Choco Hermosa.' },
  { id: 18, name: 'Adore Hermosa', rank: 'Member', branch: 'Members', sponsor: null, bio: 'Active family line.' },
  { id: 19, name: 'Papi Hermosa', rank: 'Member', branch: 'Members', sponsor: 6, bio: 'Lineage under Lakan Hermosa.' },
  { id: 20, name: 'Rayuu (Kozie) Hermosa', rank: 'Member', branch: 'Members', sponsor: 6, bio: 'Lineage under Lakan Hermosa.' },
  { id: 21, name: 'Dax Demonyo Hermosa', rank: 'Member', branch: 'Members', sponsor: null, bio: 'Demonyo bloodline.' },
  { id: 22, name: 'Sydz Demonyo Hermosa', rank: 'Member', branch: 'Members', sponsor: null, bio: 'Demonyo bloodline.' },
  { id: 23, name: 'Matteo Demonyo Hermosa', rank: 'Member', branch: 'Members', sponsor: null, bio: 'Demonyo bloodline.' },
  { id: 24, name: 'Cali Hermosa', rank: 'Member', branch: 'Members', sponsor: null, bio: 'Active family line.' },
  { id: 25, name: 'Sunday (Samoht) Hermosa', rank: 'Member', branch: 'Members', sponsor: null, bio: 'Parent of Rhy, Sushi, and Reinier.' },
  { id: 26, name: 'Crispy Hermosa', rank: 'Member', branch: 'Members', sponsor: 3, bio: 'Lineage under Choco Hermosa.' },
  { id: 27, name: 'Korbet Hermosa', rank: 'Member', branch: 'Members', sponsor: null, bio: 'Active family line.' },
  { id: 28, name: 'Tg Hermosa', rank: 'Member', branch: 'Members', sponsor: null, bio: 'Active family line.' },
  { id: 29, name: 'Tetsuya Hermosa', rank: 'Member', branch: 'Members', sponsor: 3, bio: 'Lineage under Choco Hermosa.' },
  { id: 30, name: 'Reinier Hermosa', rank: 'Associate', branch: 'Members', sponsor: 25, bio: 'Lineage under Sunday (Thomas).' },
  { id: 48, name: 'Clyde Saint Hermosa', rank: 'Associate', branch: 'Members', sponsor: 8, bio: 'Shared lineage under Serenity $aint & Serenity $in.' },
  { id: 49, name: 'Shanty Sin Hermosa', rank: 'Associate', branch: 'Members', sponsor: 8, bio: 'Shared lineage under Serenity $aint & Serenity $in.' },
  { id: 50, name: 'Riss Saint Hermosa', rank: 'Associate', branch: 'Members', sponsor: 8, bio: 'Shared lineage under Serenity $aint & Serenity $in.' },
  { id: 51, name: 'Ryujin Saint Hermosa', rank: 'Associate', branch: 'Members', sponsor: 8, bio: 'Shared lineage under Serenity $aint & Serenity $in.' },
  { id: 52, name: 'Basti Saint Hermosa', rank: 'Associate', branch: 'Members', sponsor: 8, bio: 'Shared lineage under Serenity $aint & Serenity $in.' },
  { id: 53, name: 'Pabs Saint Hermosa', rank: 'Associate', branch: 'Members', sponsor: 3, bio: 'Lineage under Choco Hermosa.' },
  { id: 54, name: 'Rhy Saint Hermosa', rank: 'Associate', branch: 'Members', sponsor: 25, bio: 'Lineage under Sunday (Thomas).' },
  { id: 55, name: 'Zion Saint Hermosa', rank: 'Associate', branch: 'Members', sponsor: null, bio: 'Saint Hermosa line.' },
  { id: 56, name: 'See Saint Hermosa', rank: 'Associate', branch: 'Members', sponsor: null, bio: 'Saint Hermosa line.' },
  { id: 57, name: 'Lance Saint Hermosa', rank: 'Associate', branch: 'Members', sponsor: null, bio: 'Saint Hermosa line.' },
  { id: 58, name: 'Santan Saint Hermosa', rank: 'Associate', branch: 'Members', sponsor: null, bio: 'Saint Hermosa line.' },
  { id: 59, name: 'Killua Saint Hermosa', rank: 'Associate', branch: 'Members', sponsor: null, bio: 'Saint Hermosa line.' },
  { id: 60, name: 'Sikret Saint Hermosa', rank: 'Associate', branch: 'Members', sponsor: null, bio: 'Saint Hermosa line.' },
  { id: 61, name: 'Kon Saint Hermosa', rank: 'Associate', branch: 'Members', sponsor: null, bio: 'Saint Hermosa line.' },
  { id: 62, name: 'Az Hermosa', rank: 'Associate', branch: 'Members', sponsor: null, bio: 'Saint Hermosa line.' },

  // --- LAANG ---
  { id: 63, name: 'Totoy Laang', rank: 'Member', branch: 'Laang', sponsor: null, bio: 'Laang family head. Parent of Samuel.' },
  { id: 64, name: 'Jumbo Laang', rank: 'Member', branch: 'Laang', sponsor: null, bio: 'Distant relative in Laang branch.' },
  { id: 65, name: 'Pludz Laang', rank: 'Member', branch: 'Laang', sponsor: null, bio: 'Distant relative in Laang branch.' },
  { id: 66, name: 'Hanz Laang', rank: 'Member', branch: 'Laang', sponsor: 31, bio: 'Laang relative under Yotam.' },
  { id: 67, name: 'Jopok Laang', rank: 'Member', branch: 'Laang', sponsor: null, bio: 'Distant relative in Laang branch.' },
  { id: 68, name: 'Ruzty Laang', rank: 'Member', branch: 'Laang', sponsor: null, bio: 'Distant relative in Laang branch.' },
  { id: 69, name: 'Max Saint Laang', rank: 'Associate', branch: 'Laang', sponsor: null, bio: 'Saint Laang relative.' },
  { id: 70, name: 'Samuel Saint Laang', rank: 'Associate', branch: 'Laang', sponsor: 63, bio: 'Saint Laang relative under Totoy & Hime.' }
]

export const byId = (id) => MEMBERS.find(m => m.id === Number(id))
export const childrenOf = (id) => {
  const targetId = Number(id)
  if (targetId === 8 || targetId === 12) {
    return MEMBERS.filter(m => m.sponsor === 8 || m.sponsor === 12)
  }
  return MEMBERS.filter(m => m.sponsor === targetId)
}
export const getInitials = (name) => name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
