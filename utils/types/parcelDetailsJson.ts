import { z } from "zod"

const trackingLocationSchema = z.object({
  zip: z.string().nullable(),
  city: z.string().nullable(),
  state: z.string().nullable(),
  object: z.string().nullable(),
  country: z.string().nullable(),
})

const dateSchema = z.preprocess((arg) => {
  if (typeof arg === "string" || arg instanceof Date) return new Date(arg)
}, z.date())
export type DateTimeSchema = z.infer<typeof dateSchema>

const parcelDetailSchema = z.object({
  object: z.string().nullable(),
  source: z.string().nullable(),
  status: z.string().nullable(),
  message: z.string().nullable(),
  datetime: dateSchema.nullable(),
  description: z.string().nullable(),
  carrier_code: z.string().nullable(),
  status_detail: z.string().nullable(),
  tracking_location: trackingLocationSchema,
})

const parcelDetailsSchema = z.array(parcelDetailSchema)

export const rawDataParcelDetailsSchema = parcelDetailsSchema

export type RawDataParcelDetail = z.infer<typeof parcelDetailSchema>
export type RawDataParcelDetails = z.infer<typeof parcelDetailsSchema>
