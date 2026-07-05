export interface DedicatedPlan {
  id: string
  name: string
  badge: string
  cpu: string
  cpuDetail: string
  ram: string
  ramDetail: string
  storage: string
  storageDetail: string
  bandwidth: string
  bandwidthDetail: string
  price: string
  period: string
  features: string[]
  orderLink: string
}

export interface PlanType {
  id: string
  name: string
  displayName: string
  image: string
}

export interface Location {
  id: string
  name: string
  flag: string
  displayName: string
  cpu: string
  availableCpus: string[]
}

export interface DediConfig {
  planTypes: PlanType[]
  locations: Location[]
  plans: {
    [key: string]: DedicatedPlan[]
  }
}
