import { ITendingNow } from "../ts/global";

export function sortFn(arr: ITendingNow[], id: string) {
  arr.unshift(arr[id! || 0]);
  arr.splice(+id! + 1, 1);
  arr.sort((a, b): any => {
    if (a !== arr[0] && b !== arr[0]) {
      return +a.Id - +b.Id;
    }
  });
}
