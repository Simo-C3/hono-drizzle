
## generate migration file

```sh
pnpm drizzle-kit generate:sqlite --out migrations --schema src/schemas/index.ts
```

## migration
### local

```sh
wrangler d1 migrations apply portal --local
```

### product

```sh
wrangler d1 migrations apply portal
```