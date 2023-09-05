export interface IRoot {
  links: ILinks
  element_count: number
  near_earth_objects: INearEarthObjects
}

export interface ILinks {
  next: string
  prev: string
  self: string
}

export interface INearEarthObjects {
  [key: string]: IAsteroid[]
}

export interface IAsteroid {
  links: ILinkObj
  id: string
  neo_reference_id: string
  name: string
  nasa_jpl_url: string
  absolute_magnitude_h: number
  estimated_diameter: IEstimatedDiameter
  is_potentially_hazardous_asteroid: boolean
  close_approach_data: ICloseApproachData[]
  is_sentry_object: boolean
}

export interface ILinkObj {
  self: string
}

export interface IEstimatedDiameter {
  kilometers: IKilometers
  meters: IMeters
  miles: IMiles
  feet: IFeet
}

export interface IKilometers {
  estimated_diameter_min: number
  estimated_diameter_max: number
}

export interface IMeters {
  estimated_diameter_min: number
  estimated_diameter_max: number
}

export interface IMiles {
  estimated_diameter_min: number
  estimated_diameter_max: number
}

export interface IFeet {
  estimated_diameter_min: number
  estimated_diameter_max: number
}

export interface ICloseApproachData {
  close_approach_date: string
  close_approach_date_full: string
  epoch_date_close_approach: number
  relative_velocity: IRelativeVelocity
  miss_distance: IMissDistance
  orbiting_body: string
}

export interface IRelativeVelocity {
  kilometers_per_second: string
  kilometers_per_hour: string
  miles_per_hour: string
}

export interface IMissDistance {
  astronomical: string
  lunar: string
  kilometers: string
  miles: string
}
