import React from 'react';
import css from "./index.module.scss";
import { useRouter } from 'next/router';

const index = () => {

  const router = useRouter();

  return (
    <div className={css.container}>
      <h1>TODO LIST</h1>
      <button onClick={() => router.push("/")}>HOME PAGE</button>
    </div>
  )
}

export default index;