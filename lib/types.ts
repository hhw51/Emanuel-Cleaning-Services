export interface FormData {
  service: string
  propertySize: string
  frequency: string
  location: string
  name: string
  email: string
  phone: string
  notes: string
}

export const emptyFormData: FormData = {
  service: '',
  propertySize: '',
  frequency: '',
  location: '',
  name: '',
  email: '',
  phone: '',
  notes: '',
}
