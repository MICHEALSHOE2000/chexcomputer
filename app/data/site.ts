export const siteConfig = {
  name: "CHEX COMPUTERS LTD",
  shortName: "CHEX",
  description:
    "Tested business laptops for retail and wholesale buyers in Lagos and across Nigeria.",
  location: "Computer Village, Ikeja, Lagos",
  address: "Computer Village, Ikeja, Lagos — exact shop address to be confirmed",
  phone: "",
  email: "",
  hours: "Business hours to be confirmed",
  siteUrl: "https://chex-computers.aderintomicheal6.chatgpt.site",
};

export function whatsappUrl(message: string) {
  const base = siteConfig.phone
    ? `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`
    : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function productWhatsappUrl(name: string, path: string) {
  const url = `${siteConfig.siteUrl}${path}`;
  return whatsappUrl(
    `Hello CHEX Computers, I’m interested in the ${name}. Please confirm availability, the exact unit condition and delivery options. CHEX product page: ${url}`,
  );
}
