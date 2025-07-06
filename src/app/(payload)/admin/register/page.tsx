import type { AdminViewProps } from 'payload'
import { RegisterView } from '../components/RegisterView'

export default function RegisterPage(props: AdminViewProps) {
  return <RegisterView {...props} />
}
