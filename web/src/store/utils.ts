export function update<S>(state: S, newState: Partial<S>): S {
  return Object.assign({}, state, newState);
}