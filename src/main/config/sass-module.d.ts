// hackzinho pra entender as extensões do scss como classes
declare module '*.scss' {
  const content: { [className: string]: string}
  export = content
}
