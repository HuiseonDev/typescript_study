// 인덱스 시그니처 - 배열

(() => {
  const arr1: Array<string> = ['hello', 'world'];
  const arr2: number[] = [10, 20, 30];
  const arr3: (string | number)[] = ['hello', 100];

  console.log(arr1, arr2, arr3);

  interface MixedArray {
    [hehe: number]: string | number;
  }

  const arr4: MixedArray = ['123', 123, '456'];
  const arr5: MixedArray = ['123', 123, '4567777'];
  console.log(arr4, arr5);
})();
