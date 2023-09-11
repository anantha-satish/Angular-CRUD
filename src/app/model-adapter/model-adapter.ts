// export interface ModelAdapter<Input, Output> {
//   adapt: (input: Input) => Output;
//   adaptArray?: (input: Input[]) => Output[];
// }

export interface Adapter<T> {
  adapt(item: T): T;
  adaptArray(item: T[]): T[];
}
