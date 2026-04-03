import { supabase } from './supabase'
import type { Profile } from '../types'

export async function getProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) return null
  return data as Profile
}

export async function createProfile(profile: Profile): Promise<boolean> {
  const { error } = await supabase
    .from('profiles')
    .insert(profile)

  return !error
}

export async function updateProfile(userId: string, fields: Partial<Profile>): Promise<boolean> {
  const { error } = await supabase
    .from('profiles')
    .upsert({ id: userId, ...fields })

  return !error
}
