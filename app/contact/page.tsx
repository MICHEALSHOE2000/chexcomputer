import type { Metadata } from "next";
import { EnquiryForm } from "../components/EnquiryForm";
import { siteConfig, whatsappUrl } from "../data/site";

export const metadata: Metadata = { title: "Contact", description: "Contact CHEX Computers for laptop recommendations, availability and wholesale enquiries in Lagos." };

export default function ContactPage() {
  return <main className="inner-page"><section className="page-hero section-shell"><p className="eyebrow"><span /> Contact CHEX</p><h1>Tell us what you need.<br /><em>We’ll narrow the options.</em></h1><p>For the fastest recommendation, include your budget, intended use, preferred screen size and location.</p></section><section className="contact-cards section-shell"><article><span>WhatsApp</span><h2>Start a guided enquiry</h2><p>Share your budget and use case for a shortlist of current options.</p><a className="text-link" href={whatsappUrl("Hello CHEX Computers, I need a laptop recommendation. My budget is ___ and I need it for ___.")} target="_blank" rel="noreferrer">Open WhatsApp ↗</a></article><article><span>Visit</span><h2>Computer Village, Ikeja</h2><p>{siteConfig.address}. Ask the team to confirm the exact shop directions before visiting.</p></article><article><span>Retail + wholesale</span><h2>One team, two buying paths</h2><p>Use this page for single-unit help, or the wholesale page for bulk and organisational requests.</p></article></section><section className="form-section"><div className="section-shell form-layout"><div><p className="eyebrow"><span /> Contact form</p><h2>Prepare your enquiry.</h2><p>Phone, email, exact shop address and opening hours are still awaiting verified business details.</p></div><EnquiryForm type="contact" /></div></section></main>;
}
