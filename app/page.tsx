"use client";

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

export default dynamic(
  async function PageComponent() {
    const pgp = await import('@torstenschmitz/wasm-rpgp');
    return function PageCOmponentLoaded() {
      useEffect(() => {
        async function encrypt_something(pgp) {
          const key = await pgp.readKey({
            ArmoredKey: `
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
  `});
          let str = pgp.encrypt_message(key, "Something encrypted")

          let msg = await pgp.createMessage({Text: str})
          let privkeys = await pgp.readPrivateKey({
            ArmoredKey: `
-----BEGIN PGP PRIVATE KEY BLOCK-----

lFgEZYwaaRYJKwYBBAHaRw8BAQdAB1/IdgODR7Qf3I41YB2cGNpWMzF9UWi84EGt
g9Z7QzUAAP9lDBnJyr6IxT/uk7SUEc/ap9eLmd5tnO1+IottYCW46BMctChKb2hu
IERvZSAodGVzdCBrZXkgZ3BnKSA8amRAZXhhbXBsZS5vcmc+iJAEExYKADgWIQRt
Zx2r0bXHyFDzQ3+Y0nC9/LR7iQUCZYwaaQIbAwULCQgHAwUVCgkICwUWAwIBAAIe
BQIXgAAKCRCY0nC9/LR7ifqLAP0SwZGAldYY95KFxEOlly+u/g0j5YFMTYTpSTEi
8s9RBAD+I552957dc9zFnnrp9TRKRP4F5RqeOrGfhRPK9QOn7wicXQRljBppEgor
BgEEAZdVAQUBAQdAnoDJ86pIi8IEh3BhtYWTskSfGzRe7Lr2cXZZg7RSQHQDAQgH
AAD/Sv13kXiBhh4JFra2hNur8f1t8MJEIgXneVg1AQrQ5vgRnoh4BBgWCgAgFiEE
bWcdq9G1x8hQ80N/mNJwvfy0e4kFAmWMGmkCGwwACgkQmNJwvfy0e4mlxwD/XscZ
NdXjZaPwZOen1JeWziM6c3ugIGX683Wnb7L18oMBANavSRpt2bXwBGgN7CnXCzOx
R5mGXy9CW2zZcFbuUiEI
=aY8j
-----END PGP PRIVATE KEY BLOCK-----
  `})

          let data = new pgp.DecryptionData(msg, privkeys)
          return await pgp.decrypt(data, ()=>"")
        }
        encrypt_something(pgp)
      }, []);
      return <p> done </p>;
    };
  },
  {
    ssr: false,
    loading: () => <p>Loading WASM...</p>
  },
);
