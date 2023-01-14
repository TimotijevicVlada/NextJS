import css from './index.module.scss';
import { useRouter } from 'next/router';


export default function Home() {

  const router = useRouter();

  return (
    <div className={css.container}>
      <h1> MAIN PAGE</h1>
      <button onClick={() => router.push("/todo-list")}>TODO LIST</button>
    </div>
  )
}
