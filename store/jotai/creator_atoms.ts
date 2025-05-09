import { atom } from 'jotai'
import { Creator } from '@/types/creator'

export const unselectedCreatorsAtom = atom([
  { name: 'クリエイター1', followers: 1000, totalLikes: 10000 },
  { name: 'クリエイター2', followers: 2000, totalLikes: 20000 },
  { name: 'クリエイター3', followers: 3000, totalLikes: 30000 },
  { name: 'クリエイター4', followers: 4000, totalLikes: 40000 },
] as Creator[])

export const selectedCreatorsAtom = atom([
  { name: 'クリエイター5', followers: 5000, totalLikes: 50000 },
  { name: 'クリエイター6', followers: 6000, totalLikes: 60000 },
  { name: 'クリエイター7', followers: 7000, totalLikes: 70000 },
  { name: 'クリエイター8', followers: 8000, totalLikes: 80000 },
] as Creator[])