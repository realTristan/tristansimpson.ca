import { MeshLambertMaterial } from "three";

export const config = {
  materials: {
    primary: new MeshLambertMaterial({
      color: "#fff",
      emissive: "#fff",
    }),

    secondary: new MeshLambertMaterial({
      color: "#1c1c1c",
      emissive: "#1c1c1c",
    }),
  },

  numberOfSphereInstances: 7,
};

export const primaryColor = config.materials.primary.color;

export const secondaryColor = config.materials.secondary.color;
