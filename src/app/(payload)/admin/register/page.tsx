import { RegisterView } from '../components/RegisterView'

interface Args {
  params?: Promise<{
    [key: string]: string | string[] | undefined
  }>
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined
  }>
}

export default function RegisterPage(props: Args) {
  return <RegisterView {...props} />
}
