import { Coach } from "./coach.types";

export const coaches: Coach[] = [
  {
    id: 1,
    name: "Manuel Choles",
    role: "Head Coach",
    experience: "10+ años",
    image: "/images/coaches/entrenador1.jpg",
    description:
      "Especialista en formación de jóvenes deportistas y desarrollo competitivo.",
    featured: true,
  },
  {
    id: 2,
    name: "fuji",
    role: "Assistant Coach",
    experience: "7 años",
    image: "/images/coaches/entrenador2.jpg",
    description:
      "Apoya el desarrollo técnico y táctico de todas las categorías.",
    featured: false,
  },
  {
    id: 3,
    name: "Mateo",
    role: "Preparador Físico",
    experience: "5 años",
    image: "/images/coaches/entrenador3.jpg",
    description:
      "Responsable del acondicionamiento físico y prevención de lesiones.",
    featured: false,
  },
];