export interface WebHostingPlan {
  id: string
  name: string
  badge?: string
  cpu: string
  cpuDetail: string
  ram: string
  ramDetail: string
  storage: string
  storageDetail: string
  bandwidth: string
  bandwidthDetail: string
  uptime: string
  price: string
  period: string
  orderLink: string
}

export interface PlanType {
  id: string
  name: string
  displayName: string
  image: string
}

export interface WebHostingConfig {
  planTypes: PlanType[]
  plans: {
    [key: string]: WebHostingPlan[]
  }
}
