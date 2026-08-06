export type CategoryGender =
  | "Mixto"
  | "Masculino"
  | "Femenino"
  | "Libre";

export interface Category {
  id: number;
  name: string;
  minAge: number;
  maxAge: number | null;
  gender: CategoryGender;
  image: string;
  description: string;
}