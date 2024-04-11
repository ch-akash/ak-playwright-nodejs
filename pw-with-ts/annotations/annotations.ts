export enum AnnotationsType {
  DEVICE = "device",
  DESKTOP = "desktop",
  FLAKY = "flaky",
}

export enum AnnotationDescription {
  DEVICE = "This is a device specific test",
  DESKTOP = "This is a desktop specific test",
  FLAKY = "This is a flaky testƒ",
}

//Tuple type annotations

export const Annotations = [
  {
    type: "device",
    desc: "This is a device specific test",
  },
];
