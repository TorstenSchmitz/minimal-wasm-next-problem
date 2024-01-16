import * as pgp from '@torstenschmitz/wasm-rpgp'


async function encrypt_something() {
  const key = await pgp.read_key_armored(`
-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEZYwaaRYJKwYBBAHaRw8BAQdAB1/IdgODR7Qf3I41YB2cGNpWMzF9UWi84EGt
g9Z7QzW0KEpvaG4gRG9lICh0ZXN0IGtleSBncGcpIDxqZEBleGFtcGxlLm9yZz6I
kAQTFgoAOBYhBG1nHavRtcfIUPNDf5jScL38tHuJBQJljBppAhsDBQsJCAcDBRUK
CQgLBRYDAgEAAh4FAheAAAoJEJjScL38tHuJ+osA/RLBkYCV1hj3koXEQ6WXL67+
DSPlgUxNhOlJMSLyz1EEAP4jnnb3nt1z3MWeeun1NEpE/gXlGp46sZ+FE8r1A6fv
CLg4BGWMGmkSCisGAQQBl1UBBQEBB0CegMnzqkiLwgSHcGG1hZOyRJ8bNF7suvZx
dlmDtFJAdAMBCAeIeAQYFgoAIBYhBG1nHavRtcfIUPNDf5jScL38tHuJBQJljBpp
AhsMAAoJEJjScL38tHuJpccA/17HGTXV42Wj8GTnp9SXls4jOnN7oCBl+vN1p2+y
9fKDAQDWr0kabdm18ARoDewp1wszsUeZhl8vQlts2XBW7lIhCA==
=q9nC
-----END PGP PUBLIC KEY BLOCK-----
  `);
  const str = pgp.encrypt_message(key, "Something encrypted")
  return str
}

export default function Home() {
  return (
    <>
      {encrypt_something()}
    </>
  )
}
