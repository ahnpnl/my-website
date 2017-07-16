// @flow

import type { DeviceType } from '../modules/deviceInfo/constants'

export interface Action<T> {
  type: string,
  payload: T,
  meta?: any,
  error?: ?any,
}

export type Dispatcher = (action: Action<any>) => void

export type DeviceInfo = {
  width: number,
  height: number,
  userAgent: string,
  orientation: string,
  deviceType: DeviceType,
}

type ImageType = {
  id: number,
  imageURL: string,
  alt: string
}

type InfoType = {
  id: number,
  title: string,
  text: string,
}

type CityType = {
  id: number,
  cityImageURL: string,
  name: string,
  nbrOfEaters: string,
  nbrOfChefs: string,
  twitter: string
}

type TestimonialType = {
  id: number,
  imageURL: string,
  customerName: string,
  text: string
}

type PlanFeatureType = {
  id: number,
  description: string
}

type PlanType = {
  id: number,
  title: string,
  price: string,
  priceDetail?: string,
  features: Array<PlanFeatureType>
}

export type MediaObjectItemType = InfoType & ImageType

export type FeaturesType = {
  featureItems: Array<InfoType>
}

export type MealsType = {
  mealItems: Array<ImageType>
}

export type CitiesType = {
  cityItems: Array<CityType>
}

export type TestimonialsType = {
  testimonialItems: Array<TestimonialType>
}

export type PlansType = {
  planItems: Array<PlanType>
}
