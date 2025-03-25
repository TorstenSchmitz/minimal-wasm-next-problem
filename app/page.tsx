"use client";
import dynamic from 'next/dynamic';

export default dynamic(
  async function Home() {
    const cardano = await import('@emurgo/cardano-serialization-lib-browser');
    return function HomeLoadedComponent() {
       
      return (
      <>
        {cardano.BigInt.from_str('1234').to_str()}
      </>)
    }
  },
  {
    ssr: false,
    loading: () => <p> Loading WASM .. </p>
  },
);
