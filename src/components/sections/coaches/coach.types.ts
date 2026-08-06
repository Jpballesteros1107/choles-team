export interface Coach {
  id: number;
  name: string;
  role: string;
  experience: string;
  image: string;
  description: string;
  featured: boolean;

  socials?: {
  instagram?: string;
  facebook?: string;
  whatsapp?: string;
}
}
