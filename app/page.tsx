import * as pgp from '@torstenschmitz/wasm-rpgp'

export default function Home() {
  return (
    <>
      {pgp.is_encrypted("plaintext")}
    </>
  );
}
