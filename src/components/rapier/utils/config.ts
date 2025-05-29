import { MeshLambertMaterial } from "three";

export const config = {
  materials: {
    primary: new MeshLambertMaterial({
      color: "#ffffff",
      emissive: "#ffffff",
      emissiveIntensity: 0.5,
    }),

    secondary: new MeshLambertMaterial({
      color: "#000000",
      emissive: "#1a1a1a",
      emissiveIntensity: 0.5,
    }),

    tertiary: new MeshLambertMaterial({
      color: "#000000",
      emissive: "#1a1a1a",
      emissiveIntensity: 0.5,
    }),

    ball: new MeshLambertMaterial({
      color: "#1a1a1a",
      emissive: "#1a1a1a",
      emissiveIntensity: 0.3,
    }),
  },

  numberOfSphereInstances: 7,
};

export const primaryColor = config.materials.primary.color;

export const secondaryColor = config.materials.secondary.color;
