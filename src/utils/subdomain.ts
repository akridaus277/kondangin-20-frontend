// utils/subdomain.ts
export const getSubdomain = (): string | null => {
  const host = window.location.hostname

  // Untuk development di localhost (misal: arga.localhost)
  if (host.endsWith(".localhost")) {
    const parts = host.split(".")
    return parts[0] !== "localhost" ? parts[0] : null
  }

  // Untuk production (misal: arga.kondangin.org)
  const parts = host.split(".")

  if (parts.length > 2) {
    return parts[0] // subdomain sebelum domain utama
  }

  return null
}

  