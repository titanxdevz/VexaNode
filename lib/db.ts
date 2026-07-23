import { createClient } from './supabase'

export interface UserProfile {
  id: string
  name: string
  email: string
  avatar_url?: string
  status: 'Active' | 'Banned'
  is_admin: boolean
  joined_at: string
}

export interface Order {
  id: string
  user_id: string
  user_name: string
  plan_name: string
  amount: string
  status: 'Pending' | 'Approved' | 'Suspended' | 'Cancelled'
  proof_url: string
  expiry_date?: string
  created_at: string
}



export const banUser = async (id: string) => {
  const supabase = await createClient()
  const { error } = await supabase
    .from('profiles')
    .update({ status: 'Banned' })
    .eq('id', id)
  if (error) throw error
}

export const unbanUser = async (id: string) => {
  const supabase = await createClient()
  const { error } = await supabase
    .from('profiles')
    .update({ status: 'Active' })
    .eq('id', id)
  if (error) throw error
}

export const deleteOrder = async (id: string) => {
  const supabase = await createClient()
  const { error } = await supabase
    .from('orders')
    .delete()
    .eq('id', id)
  if (error) throw error
}

export const updateOrderStatus = async (id: string, status: string) => {
  const supabase = await createClient()
  const { error } = await supabase
    .from('orders')
    .update({ status })
    .eq('id', id)
  if (error) throw error
}

export const getUserOrders = async (userId: string) => {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data
}

export const createOrder = async (orderData: Partial<Order>) => {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('orders')
    .insert([orderData])
    .select()
  
  if (error) throw error
  return data[0]
}

// Tickets
export async function getTickets(userId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('tickets')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data || []
}

export async function createTicket(ticketData: any) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('tickets')
    .insert([ticketData])
    .select()
  
  if (error) throw error
  return data[0]
}

export async function getTicketById(ticketId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('tickets')
    .select('*, users(name, image)')
    .eq('id', ticketId)
    .single()
  
  if (error) throw error
  return data
}

export async function getTicketReplies(ticketId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('ticket_replies')
    .select('*, users(name, image)')
    .eq('ticket_id', ticketId)
    .order('created_at', { ascending: true })
  
  if (error) throw error
  return data || []
}

export async function addTicketReply(replyData: any) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('ticket_replies')
    .insert([replyData])
    .select()
  
  if (error) throw error
  return data[0]
}

export async function updateTicketStatus(ticketId: string, status: string) {
  const supabase = await createClient()
  const { error } = await supabase
    .from('tickets')
    .update({ status })
    .eq('id', ticketId)
  
  if (error) throw error
}

export const getAllData = async () => {
  const supabase = await createClient()
  const { data: users, error: uError } = await supabase.from('profiles').select('*')
  const { data: orders, error: oError } = await supabase.from('orders').select('*').order('created_at', { ascending: false })
  const { data: tickets, error: tError } = await supabase.from('tickets').select('*, users(name, image)').order('created_at', { ascending: false })
  
  if (uError || oError || tError) throw (uError || oError || tError)
  
  return { users, orders, tickets }
}
